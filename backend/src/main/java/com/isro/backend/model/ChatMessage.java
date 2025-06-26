package com.isro.backend.model;

public class ChatMessage {
    private String content;
    private String sender;
    private String timestamp;
    private MessageType type;

    public ChatMessage() {
    }

    public ChatMessage(String content, String sender, String timestamp, MessageType type) {
        this.content = content;
        this.sender = sender;
        this.timestamp = timestamp;
        this.type = type;
    }

    public enum MessageType {
        CHAT,
        JOIN,
        LEAVE
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

    public MessageType getType() {
        return type;
    }

    public void setType(MessageType type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "ChatMessage{" +
                "content='" + content + '\'' +
                ", sender='" + sender + '\'' +
                ", timestamp='" + timestamp + '\'' +
                ", type=" + type +
                '}';
    }
}