package com.example.SpiralDemo.controller;


import com.example.SpiralDemo.dao.User;
import com.example.SpiralDemo.service.ServiceUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private ServiceUser userService;

    //  http://localhost:9988/api/v1/user
    @PostMapping("/user")
    public ResponseEntity<?> saveUser(@RequestBody User user)  {
        return new ResponseEntity<>(userService.saveUser(user), HttpStatus.CREATED);
    }

  //  http://localhost:9988/api/v1/login
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user)
    {
        return new ResponseEntity<>(userService.Login(user.getEmailId(),user.getPassword()),HttpStatus.OK);
    }
    // http://localhost:9988/api/v1/get-all-user
    @GetMapping("/get-all-user/{EmailId}")
    public ResponseEntity<?> getAllUser(@PathVariable String EmailId)
    {
        return new ResponseEntity<>(userService.getUserData(EmailId), HttpStatus.OK);
    }
    // http://localhost:9988/api/v1/get-student
    @GetMapping("/get-student")
    public ResponseEntity<?> getAllStudent()
    {
        return new ResponseEntity<>(userService.getAllStudent(), HttpStatus.OK);
    }
}

