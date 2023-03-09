package com.example.SpiralDemo.service;

import com.example.SpiralDemo.dao.Assignment;
import com.example.SpiralDemo.dao.MasterClass;
import com.example.SpiralDemo.dao.Question;
import com.example.SpiralDemo.dao.Student;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface MasterService {


    MasterClass addTask(MasterClass masterClass);
    List<Assignment> getList(String emailId);
    MasterClass addAssignment(String emailId,Assignment assignment);

    Question addQuestion(Question question ,String emailId,String AssignmentId);
    List<Question>  getQuestion(String emailId,String AssinmentId);

    MasterClass addStudent(Student student,String emailId);

    MasterClass addAssignmentToStudent(String studentEmailId,Assignment assignment1,String MasterEmailId);


}
