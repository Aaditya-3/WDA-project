import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Paper,
  IconButton,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Badge,
  Fab,
  Zoom,
  Divider,
} from '@mui/material';
import {
  Send as SendIcon,
  Chat as ChatIcon,
  Close as CloseIcon,
  Person as PersonIcon,
} from '@mui/icons-material';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { useAuth } from '../contexts/AuthContext';


const SOCKET_URL = 'http://localhost:8081/ws';

const ChatWindow = styled(Paper)(({ theme }) => ({
  position: 'fixed',
  bottom: 100,
  right: 20,
  width: 350,
  height: 500,
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 15,
  overflow: 'hidden',
  background: '#f0f4fa',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  zIndex: 1000,
}));

const ChatHeader = styled(Box)(({ theme }) => ({
  padding: '15px 20px',
  background: '#0d47a1',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const MessagesContainer = styled(Box)({
  flex: 1,
  overflowY: 'auto',
  padding: '10px',
  backgroundColor: '#f8fafc',
});

const MessageItem = styled(ListItem)(({ isUser, theme }) => ({
  flexDirection: 'column',
  alignItems: isUser ? 'flex-end' : 'flex-start',
  padding: '8px 16px',
  '& > div': {
    alignItems: isUser ? 'flex-end' : 'flex-start',
  }
}));

const MessageContent = styled(Paper)(({ isUser, theme }) => ({
  padding: '10px 18px',
  backgroundColor: isUser ? '#1976d2' : '#e3e8ef',
  color: isUser ? 'white' : '#222b45',
  borderRadius: '15px',
  maxWidth: '80%',
  wordBreak: 'break-word',
  fontSize: '1rem',
  fontWeight: 500,
  boxShadow: isUser ? '0 2px 8px rgba(25, 118, 210, 0.08)' : '0 2px 8px rgba(0,0,0,0.04)',
}));

const InputContainer = styled(Box)({
  padding: '15px',
  background: 'white',
  borderTop: '1px solid rgba(0, 0, 0, 0.1)',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

const OnlineUsers = styled(Box)({
  padding: '10px',
  background: '#e3e8ef',
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
});

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [stompClient, setStompClient] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const messagesEndRef = useRef(null);
  const { user } = useAuth();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!isOpen) {
      if (stompClient) {
        stompClient.deactivate();
        setStompClient(null);
      }
      return;
    }

    const socket = new SockJS(SOCKET_URL);
    const client = new Client({
      webSocketFactory: () => socket,
      connectHeaders: {},
      debug: (str) => {
        console.log('STOMP Debug:', str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 25000,
      heartbeatOutgoing: 25000,
      onStompError: (frame) => {
        console.error('STOMP error:', frame);
        setIsConnected(false);
      },
    });

    client.onConnect = () => {
      console.log('Connected to WebSocket');
      setIsConnected(true);


      const publicSubscription = client.subscribe('/topic/public', (message) => {
        console.log('=== START PROCESSING RECEIVED MESSAGE ===');
        console.log('Raw message:', message);
        try {
          const receivedMessage = JSON.parse(message.body);
          console.log('Parsed message:', receivedMessage);
          
          if (!receivedMessage.type || !receivedMessage.sender) {
            console.error('Invalid message format:', receivedMessage);
            return;
          }

          setMessages((prev) => {
            const isDuplicate = prev.some(
              (m) => 
                m.timestamp === receivedMessage.timestamp && 
                m.sender === receivedMessage.sender && 
                m.content === receivedMessage.content
            );
            if (isDuplicate) {
              console.log('Duplicate message detected, skipping');
              return prev;
            }
            console.log('Adding new message to state');
            const newMessages = [...prev, receivedMessage];
            console.log('Updated messages:', newMessages);
            return newMessages;
          });
          console.log('=== END PROCESSING RECEIVED MESSAGE ===');
        } catch (error) {
          console.error('Error processing message:', error);
          console.error('=== ERROR PROCESSING RECEIVED MESSAGE ===');
        }
      });

      const usersSubscription = client.subscribe('/topic/active-users', (message) => {
        console.log('=== START PROCESSING USERS UPDATE ===');
        console.log('Raw users update:', message);
        try {
          let users = JSON.parse(message.body);
          // Ensure unique users only
          users = Array.from(new Set(users));
          console.log('Parsed users:', users);
          setOnlineUsers(users);
          console.log('Updated online users state');
          console.log('=== END PROCESSING USERS UPDATE ===');
        } catch (error) {
          console.error('Error processing users update:', error);
          console.error('=== ERROR PROCESSING USERS UPDATE ===');
        }
      });

      const connectMessage = {
        userId: user?.name || 'Guest',
      };
      console.log('Sending user connect message:', connectMessage);
      client.publish({
        destination: '/app/user.connect',
        body: JSON.stringify(connectMessage),
        headers: { 'content-type': 'application/json' }
      });


      client.subscriptions = {
        public: publicSubscription,
        users: usersSubscription
      };
    };

    client.onStompError = (frame) => {
      console.error('STOMP error:', frame);
      setIsConnected(false);
    };

    client.onWebSocketError = (error) => {
      console.error('WebSocket error:', error);
      setIsConnected(false);
    };

    client.onDisconnect = () => {
      console.log('Disconnected from WebSocket');
      setIsConnected(false);
    };

    try {
      client.activate();
      setStompClient(client);
    } catch (error) {
      console.error('Error activating STOMP client:', error);
      setIsConnected(false);
    }

    return () => {
      if (client.connected) {
        if (client.subscriptions) {
          Object.values(client.subscriptions).forEach(sub => sub.unsubscribe());
        }
        client.deactivate();
      }
    };
  }, [isOpen, user]);

  const handleSend = () => {
    if (!message.trim() || !stompClient?.connected) {
      console.log('Cannot send message: ', !message.trim() ? 'empty message' : 'not connected');
      return;
    }

    const chatMessage = {
      content: message.trim(),
      sender: user?.name || 'Guest',
      timestamp: new Date().toLocaleTimeString(),
      type: 'CHAT'
    };

    console.log('=== START SENDING MESSAGE ===');
    console.log('Preparing to send chat message:', chatMessage);
    try {
      stompClient.publish({
        destination: '/app/chat.send',
        body: JSON.stringify(chatMessage),
        headers: { 'content-type': 'application/json' }
      });
      console.log('Message sent successfully');
      

      setMessage('');
      console.log('=== END SENDING MESSAGE ===');
    } catch (error) {
      console.error('Error sending message:', error);
      console.error('=== ERROR SENDING MESSAGE ===');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <Zoom in={isOpen}>
        <ChatWindow>
          <ChatHeader>
            <Typography variant="h6">Live Chat {isConnected ? '(Connected)' : '(Disconnected)'}</Typography>
            <IconButton size="small" onClick={() => setIsOpen(false)} sx={{ color: 'white' }}>
              <CloseIcon />
            </IconButton>
          </ChatHeader>

          <OnlineUsers>
            <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 'bold', color: '#0d47a1' }}>
              Online Users (<span style={{ color: '#d32f2f', fontWeight: 'bold' }}>{onlineUsers.length}</span>)
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {onlineUsers.map((user, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    backgroundColor: 'white',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                  }}
                >
                  <PersonIcon sx={{ fontSize: 16 }} />
                  <span>{user}</span>
                </Box>
              ))}
            </Box>
          </OnlineUsers>

          <MessagesContainer>
            <List>
              {messages.map((msg, index) => (
                <React.Fragment key={index}>
                  {msg.type === 'JOIN' || msg.type === 'LEAVE' ? (
                    <ListItem sx={{ justifyContent: 'center' }}>
                      <Typography variant="caption" color="textSecondary">
                        {msg.sender} {msg.type === 'JOIN' ? 'joined' : 'left'} the chat
                      </Typography>
                    </ListItem>
                  ) : (
                    <MessageItem 
                      component="div" 
                      isUser={msg.sender === (user?.name || 'Guest')}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                        <Avatar sx={{ width: 24, height: 24 }}>
                          <PersonIcon sx={{ fontSize: 16 }} />
                        </Avatar>
                        <Typography variant="caption" color="textSecondary">
                          {msg.sender}
                        </Typography>
                      </Box>
                      <MessageContent 
                        isUser={msg.sender === (user?.name || 'Guest')}
                      >
                        <Typography variant="body1">{msg.content}</Typography>
                        <Typography variant="caption" sx={{ display: 'block', mt: 0.5, opacity: 0.7 }}>
                          {msg.timestamp}
                        </Typography>
                      </MessageContent>
                    </MessageItem>
                  )}
                  {index < messages.length - 1 && <Divider variant="fullWidth" component="li" />}
                </React.Fragment>
              ))}
            </List>
            <div ref={messagesEndRef} />
          </MessagesContainer>

          <InputContainer>
            <TextField
              fullWidth
              multiline
              maxRows={3}
              variant="outlined"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              size="small"
              disabled={!isConnected}
            />
            <IconButton 
              color="primary" 
              onClick={handleSend}
              disabled={!isConnected || !message.trim()}
            >
              <SendIcon />
            </IconButton>
          </InputContainer>
        </ChatWindow>
      </Zoom>

      {!isOpen && (
        <Fab
          color="primary"
          aria-label="chat"
          onClick={() => setIsOpen(true)}
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            backgroundColor: '#1a237e',
          }}
        >
          <Badge badgeContent={onlineUsers.length} color="error">
            <ChatIcon />
          </Badge>
        </Fab>
      )}
    </>
  );
};

export default LiveChat; 