package com.wda.controller;

import com.wda.model.ChatMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@Controller
public class ChatController {

    private static final Logger logger = LoggerFactory.getLogger(ChatController.class);
    private static final List<String> onlineUsers = new CopyOnWriteArrayList<>();
    
    @Autowired
    private SimpMessagingTemplate template;

    @MessageMapping("/chat.send")
    public void sendMessage(@Payload ChatMessage chatMessage) {
        logger.info("=== START PROCESSING CHAT MESSAGE ===");
        logger.info("Received message from {}: {}", chatMessage.getSender(), chatMessage.getContent());
        try {
            if (chatMessage.getType() == null) {
                chatMessage.setType(ChatMessage.MessageType.CHAT);
                logger.info("Set message type to CHAT");
            }
         
            if (chatMessage.getSender() == null || chatMessage.getContent() == null) {
                logger.error("Invalid message format: {}", chatMessage);
                return;
            }
            
            if (chatMessage.getTimestamp() == null) {
                chatMessage.setTimestamp(new java.text.SimpleDateFormat("h:mm:ss a")
                    .format(new java.util.Date()));
                logger.info("Added server timestamp: {}", chatMessage.getTimestamp());
            }
            
            logger.info("Attempting to broadcast message to /topic/public: {}", chatMessage);
            template.convertAndSend("/topic/public", chatMessage);
            
            logger.info("Successfully broadcast message. Type: {}, Sender: {}, Content length: {}", 
                chatMessage.getType(), 
                chatMessage.getSender(), 
                chatMessage.getContent().length());
            logger.info("=== END PROCESSING CHAT MESSAGE ===");
        } catch (Exception e) {
            logger.error("Error broadcasting message: {}", e.getMessage(), e);
            logger.error("=== ERROR PROCESSING CHAT MESSAGE ===");
        }
    }

    @MessageMapping("/chat.join")
    public void addUser(@Payload ChatMessage chatMessage, SimpMessageHeaderAccessor headerAccessor) {
        String username = chatMessage.getSender();
        logger.info("=== START PROCESSING JOIN REQUEST ===");
        logger.info("User attempting to join: {}", username);
        
        try {
            headerAccessor.getSessionAttributes().put("username", username);
            logger.info("Added username to session attributes: {}", username);
            
  
            if (!onlineUsers.contains(username)) {
                onlineUsers.add(username);
                logger.info("Added user to online users. Current users: {}", onlineUsers);
                broadcastOnlineUsers();
            }
            
            if (chatMessage.getType() == null) {
                chatMessage.setType(ChatMessage.MessageType.JOIN);
            }
            
            logger.info("Broadcasting join message to /topic/public: {}", chatMessage);
            template.convertAndSend("/topic/public", chatMessage);
            logger.info("Successfully broadcast join message for user: {}", username);
            logger.info("=== END PROCESSING JOIN REQUEST ===");
        } catch (Exception e) {
            logger.error("Error processing join request for {}: {}", username, e.getMessage(), e);
            logger.error("=== ERROR PROCESSING JOIN REQUEST ===");
        }
    }

    @MessageMapping("/chat.leave")
    public void removeUser(@Payload ChatMessage chatMessage) {
        String username = chatMessage.getSender();
        logger.info("User attempting to leave: {}", username);
        
        try {
            onlineUsers.remove(username);
            logger.info("Removed user from online users. Current users: {}", onlineUsers);
            broadcastOnlineUsers();
            
            if (chatMessage.getType() == null) {
                chatMessage.setType(ChatMessage.MessageType.LEAVE);
            }
            
            template.convertAndSend("/topic/public", chatMessage);
            logger.info("Successfully broadcast leave message for user: {}", username);
        } catch (Exception e) {
            logger.error("Error processing leave request for {}: {}", username, e.getMessage(), e);
        }
    }

    private void broadcastOnlineUsers() {
        try {
            List<String> usersList = new ArrayList<>(onlineUsers);
            logger.info("Broadcasting online users list: {}", usersList);
            template.convertAndSend("/topic/users", usersList);
            logger.info("Successfully broadcast online users list");
        } catch (Exception e) {
            logger.error("Error broadcasting online users list: {}", e.getMessage(), e);
        }
    }
} 