package com.example.SpiralDemo.controller;


import com.example.SpiralDemo.dao.Assignment;
import com.example.SpiralDemo.dao.MasterClass;
import com.example.SpiralDemo.dao.Question;
import com.example.SpiralDemo.dao.Student;
import com.example.SpiralDemo.service.MasterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v2")
@CrossOrigin("*")
public class MasterController {



    @Autowired
    private MasterService masterService;


  //  http://localhost:9988/api/v2/register
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody MasterClass user1)  {
        return new ResponseEntity<>(masterService.addTask(user1), HttpStatus.OK);
    }


    //  http://localhost:9988/api/v2/get
    @GetMapping("/get/{emailId}")
    public ResponseEntity<?> getList(@PathVariable String emailId)  {
        return new ResponseEntity<>(masterService.getList(emailId), HttpStatus.OK);
    }


    //  http://localhost:9988/api/v2/addAssignment
    @PostMapping("/addAssignment/{emailId}")
    public ResponseEntity<?> AddAssignment(@PathVariable String emailId, @RequestBody Assignment assignment)  {
        return new ResponseEntity<>(masterService.addAssignment(emailId, assignment), HttpStatus.OK);
    }

  //  http://localhost:9988/api/v2/addQuestion
    @PostMapping("/addQuestion/{emailId}/{AssignmentId}")
    public ResponseEntity<?> addQuestion(@PathVariable String emailId, @RequestBody Question question,@PathVariable String AssignmentId)  {
        return new ResponseEntity<>(masterService.addQuestion(question, emailId, AssignmentId), HttpStatus.OK);
    }

    //  http://localhost:9988/api/v2/getQuestion
    @GetMapping("/getQuestion/{emailId}/{AssinmentId}")
    public ResponseEntity<?> getQuesion(@PathVariable String emailId,@PathVariable String AssinmentId) {
        return new ResponseEntity<>(masterService.getQuestion(emailId, AssinmentId), HttpStatus.OK);
    }

    //  http://localhost:9988/api/v2/addStudent
    @PostMapping("/addStudent/{emailId}")
    public ResponseEntity<?> addStudent(@RequestBody Student student,@PathVariable  String emailId)  {
        return new ResponseEntity<>(masterService.addStudent(student, emailId), HttpStatus.OK);
    }

  //  http://localhost:9988/api/v2/addAssignmentToStudent
    @PostMapping("/addAssignmentToStudent/{MasterEmailId}/{emailId}")
    public ResponseEntity<?> addAssignmentList(@PathVariable String MasterEmailId,@PathVariable String emailId, @RequestBody Assignment assignmentId)  {
        return new ResponseEntity<>(masterService.addAssignmentToStudent(emailId, assignmentId, MasterEmailId),HttpStatus.OK);
    }



}
