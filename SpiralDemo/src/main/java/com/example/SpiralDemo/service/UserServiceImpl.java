package com.example.SpiralDemo.service;

import com.example.SpiralDemo.dao.Assignment;
import com.example.SpiralDemo.dao.MasterClass;
import com.example.SpiralDemo.dao.Student;
import com.example.SpiralDemo.dao.User;
import com.example.SpiralDemo.repository.MasterRepository;
import com.example.SpiralDemo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements ServiceUser{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MasterRepository  masterRepository;

    @Override
    public User saveUser(User user) {
if(user.getRollUser().equalsIgnoreCase("master")) {
    List<Student> studentArrayList = new ArrayList<>();
    List<Assignment> assignmentArrayList = new ArrayList<>();
    MasterClass newUser = new MasterClass();
    newUser.setStudentList(studentArrayList);
    newUser.setAssignmentList(assignmentArrayList);
    newUser.setEmailId(user.getEmailId());
    newUser.setName(user.getName());
    newUser.setPassword(user.getPassword());
     masterRepository.insert(newUser);

}else
{
    return userRepository.save(user);
}
        return userRepository.save(user);
    }


    @Override
    public User Login(String emailId, String password) {
        if (userRepository.findById(emailId).isPresent()) {
            User user = userRepository.findById(emailId).get();
            if (user.getPassword().equalsIgnoreCase(password)) {
                System.out.println("userlogged in");
                return user;
            } else {
                return null;
            }
        }
        return null;
    }

    @Override
    public Optional<User> getUserData(String emailId) {
        if(userRepository.findById(emailId).isEmpty())
        {
            return null;
        }
        return userRepository.findById(emailId);
    }

    @Override
    public List<User> getAllStudent() {
        List<User> list=userRepository.findAll();
        List<User> userList=list.stream().filter(i->i.getRollUser().equalsIgnoreCase("student")).collect(Collectors.toList());
  return userList;
    }



}
