package com.isro.backend.config;

import com.isro.backend.model.User;
import com.isro.backend.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initDatabase(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            // Create admin user
            if (userRepository.findByEmail("admin@isro.com").isEmpty()) {
                User adminUser = new User();
                adminUser.setEmail("admin@isro.com");
                adminUser.setName("Admin User");
                adminUser.setPassword(passwordEncoder.encode("admin123"));
                adminUser.setRole("ADMIN");
                userRepository.save(adminUser);
                System.out.println("Created admin user");
            }

            // Create test users
            String[] testUsers = {"user1", "user2", "user3", "user4"};
            for (String user : testUsers) {
                String email = user + "@isro.com";
                if (userRepository.findByEmail(email).isEmpty()) {
                    User newUser = new User();
                    newUser.setEmail(email);
                    newUser.setName(user.substring(0, 1).toUpperCase() + user.substring(1));
                    newUser.setPassword(passwordEncoder.encode("password123"));
                    newUser.setRole("USER");
                    userRepository.save(newUser);
                    System.out.println("Created test user: " + email);
                }
            }

            // Create moderator users
            String[] moderators = {"mod1", "mod2"};
            for (String mod : moderators) {
                String email = mod + "@isro.com";
                if (userRepository.findByEmail(email).isEmpty()) {
                    User moderator = new User();
                    moderator.setEmail(email);
                    moderator.setName(mod.substring(0, 1).toUpperCase() + mod.substring(1));
                    moderator.setPassword(passwordEncoder.encode("mod123"));
                    moderator.setRole("MODERATOR");
                    userRepository.save(moderator);
                    System.out.println("Created moderator user: " + email);
                }
            }
        };
    }
} 