package com.example.SpiralDemo.service;

import com.example.SpiralDemo.dao.Student;
import com.example.SpiralDemo.dao.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface ServiceUser {

    User saveUser(User user);
    User Login(String emailId, String password);
    Optional<User> getUserData(String emailId);
    List<User> getAllStudent();
}
