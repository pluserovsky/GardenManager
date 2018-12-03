package com.gm.app.model;

import org.junit.Test;

import static org.junit.Assert.*;

public class UserTest {

    private User user = new User();
    @Test
    public void setId() {
        Long id = (long)1;
        user.setId(id);
        assertEquals(user.getId(),id);
    }

    @Test
    public void setName() {
        String name = "Łukasz";
        user.setName(name);
        assertEquals( user.getName(), name);
    }

    @Test
    public void setEmail() {
        String name = "lukasz@broll.pl";
        user.setEmail(name);
        assertEquals( user.getEmail(), name);
    }

    @Test
    public void setUsername() {
        String username = "lukasz";
        user.setUsername(username);
        assertEquals( user.getUsername(), username);
    }

    @Test
    public void setPassword() {
        String password = "admin123";
        user.setPassword(password);
        assertEquals( user.getPassword(), password);
    }

    @Test
    public void setRole() {
        String role = "ROLE_USER";
        user.setRole(role);
        assertEquals( user.getRole(), role);
    }

    @Test
    public void setEnabled() {
        boolean en=true;
        user.setActive(en);
        assertEquals(user.isActive(),en);
    }

    @Test
    public void setConfirmationToken() {
        String token = "7cfc1131-aa38-415a-9e5c-b8f91a365148";
        user.setConfirmationToken(token);
        assertEquals( user.getConfirmationToken(), token);
    }
}