package com.prettylife.service;

import com.prettylife.model.entity.User;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.Optional;

/**
 * @author 二青
 */
public interface UserService extends UserDetailsService {

    Optional<User> getUserById(Long id);

    boolean saveUser(User user);

    boolean modifyUserOnPasswordById(User user);

    boolean deleteUserById(Long id);

}
