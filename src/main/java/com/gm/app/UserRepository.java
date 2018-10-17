package com.gm.app;
import org.springframework.data.repository.CrudRepository;

import com.gm.app.User;
public interface UserRepository extends CrudRepository<User, Integer> {

}