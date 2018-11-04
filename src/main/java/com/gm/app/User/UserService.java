package com.gm.app.User;

import java.util.List;
import java.util.Optional;

public interface UserService {

    User save(User user);
    List<User> findAll();
    void delete(long id);
    User findOne(String username);
    Optional<User> findById(Long id);
}
