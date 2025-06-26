package com.isro.backend.model;

public class PresenceMessage {
    private String username;
    private Status status;

    public enum Status {
        ONLINE,
        OFFLINE
    }

    public PresenceMessage() {
    }

    public PresenceMessage(String username, Status status) {
        this.username = username;
        this.status = status;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "PresenceMessage{" +
                "username='" + username + '\'' +
                ", status=" + status +
                '}';
    }
}