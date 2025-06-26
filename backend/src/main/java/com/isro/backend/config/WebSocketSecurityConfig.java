package com.isro.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.messaging.access.intercept.MessageMatcherDelegatingAuthorizationManager;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.security.authorization.AuthorizationManager;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;

@Configuration
@Order(Ordered.HIGHEST_PRECEDENCE + 99)
public class WebSocketSecurityConfig {

    /**
     * DEVELOPMENT ONLY: Permit all WebSocket messages, including connect, subscribe, and send.
     * Remove or restrict this in production!
     */
    @Bean
    public AuthorizationManager<Message<?>> messageAuthorizationManager() {
        MessageMatcherDelegatingAuthorizationManager.Builder messages = MessageMatcherDelegatingAuthorizationManager.builder();
        messages.anyMessage().permitAll();
        return messages.build();
    }

    // CSRF for WebSocket messaging is disabled by not registering CsrfChannelInterceptor
    @Bean(name = "csrfChannelInterceptor")
    public Object csrfChannelInterceptor() {
        return null;
    }
} 