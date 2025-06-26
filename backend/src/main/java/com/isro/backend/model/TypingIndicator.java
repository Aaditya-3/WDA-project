package com.isro.backend.model;

public class TypingIndicator {
    private String username;
    private boolean isTyping;

    public TypingIndicator() {
    }

    public TypingIndicator(String username, boolean isTyping) {
        this.username = username;
        this.isTyping = isTyping;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public boolean isTyping() {
        return isTyping;
    }

    public void setTyping(boolean isTyping) {
        this.isTyping = isTyping;
    }

    @Override
    public String toString() {
        return "TypingIndicator{" +
                "username='" + username + '\'' +
                ", isTyping=" + isTyping +
                '}';
    }
}