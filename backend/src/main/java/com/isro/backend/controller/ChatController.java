package com.isro.backend.controller;

import com.isro.backend.model.ChatMessage;
import com.isro.backend.model.TypingIndicator;
import com.isro.backend.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Controller
public class ChatController {
    private static final Logger logger = LoggerFactory.getLogger(ChatController.class);
    private final Map<String, String> activeUsers = new ConcurrentHashMap<>();
    

    // @Autowired
    // private UserService userService;
    
    

    @MessageMapping("/chat.send")
    @SendTo("/topic/public")
    public ChatMessage sendMessage(@Payload ChatMessage chatMessage, SimpMessageHeaderAccessor headerAccessor) {
        logger.info("Received message: {}", chatMessage);
        String content = chatMessage.getContent();
        ChatMessage.MessageType type = chatMessage.getType();
        String timestamp = chatMessage.getTimestamp();

        // Fix: Avoid NPE if getUser() is null
        String username = chatMessage.getSender();
        if (username == null || username.isEmpty()) {
            if (headerAccessor.getUser() != null) {
                username = headerAccessor.getUser().getName();
            } else if (headerAccessor.getSessionAttributes() != null && headerAccessor.getSessionAttributes().get("userId") != null) {
                username = headerAccessor.getSessionAttributes().get("userId").toString();
            } else {
                username = "Guest";
            }
        }
        chatMessage.setSender(username);
        chatMessage.setTimestamp(timestamp);
        chatMessage.setType(type);
        chatMessage.setContent(content);
        return chatMessage;
    }

    @MessageMapping("/user.connect")
    @SendTo("/topic/active-users")
    public List<String> userConnected(Map<String, String> userData, 
                                    SimpMessageHeaderAccessor headerAccessor) {
        String userId = userData.get("userId");
        headerAccessor.getSessionAttributes().put("userId", userId);
        activeUsers.put(headerAccessor.getSessionId(), userId);
        return new ArrayList<>(activeUsers.values());
    }

    @MessageMapping("/typing")
    @SendTo("/topic/typing")
    public TypingIndicator typing(@Payload TypingIndicator typingIndicator, SimpMessageHeaderAccessor headerAccessor) {
        // Fix: Avoid NPE if getUser() is null
        String username = typingIndicator.getUsername();
        if (username == null || username.isEmpty()) {
            if (headerAccessor.getUser() != null) {
                username = headerAccessor.getUser().getName();
            } else if (headerAccessor.getSessionAttributes() != null && headerAccessor.getSessionAttributes().get("userId") != null) {
                username = headerAccessor.getSessionAttributes().get("userId").toString();
            } else {
                username = "Guest";
            }
        }
        typingIndicator.setUsername(username);
        return typingIndicator;
    }
} 