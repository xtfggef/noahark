package com.prettylife.repository;

import com.prettylife.model.entity.User;

import java.util.List;

/**
 * @author 二青
 */
public interface UserRepository {

    User selectUserById(Long id);

    User selectUserByUsername(String username);

    List<User> selectAllUsers();

    Integer insertUser(User user);

    Integer updateUserOnPasswordById(User user);

    Integer deleteUserById(Long id);

}
