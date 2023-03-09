package com.example.SpiralDemo.service;

import com.example.SpiralDemo.dao.Assignment;
import com.example.SpiralDemo.dao.MasterClass;
import com.example.SpiralDemo.dao.Question;
import com.example.SpiralDemo.dao.Student;
import com.example.SpiralDemo.repository.MasterRepository;
import com.example.SpiralDemo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class MasterServiceImpl implements MasterService{


    @Autowired
    MasterRepository masterRepository;

    @Autowired
    UserRepository userRepository;


    @Override
    public MasterClass addTask(MasterClass masterClass) {
        List<Student> studentArrayList = new ArrayList<>();
        List<Assignment> assignmentArrayList = new ArrayList<>();
        MasterClass newUser = new MasterClass();
        newUser.setStudentList(studentArrayList);
        newUser.setAssignmentList(assignmentArrayList);
        newUser.setEmailId(masterClass.getEmailId());
        newUser.setName(masterClass.getName());
        newUser.setPassword(masterClass.getPassword());

        return masterRepository.insert(newUser);
    }

    @Override
    public List<Assignment> getList(String emailId) {
        if(masterRepository.findById(emailId).isPresent())
        {
            MasterClass masterClass=masterRepository.findById(emailId).get();
            List <Assignment> assignmentList=masterClass.getAssignmentList();
            return assignmentList;
        }
        return null;
    }

    @Override
    public MasterClass addAssignment(String emailId,Assignment assignment) {
        if(masterRepository.findById(emailId).isPresent())
        {
            MasterClass masterClass=masterRepository.findById(emailId).get();
            Assignment assignment1=new Assignment(assignment.getAssignmentId(),assignment.getAssignmentName(),new ArrayList<>());
            List <Assignment> assignmentList=masterClass.getAssignmentList();
            assignmentList.add(assignment1);
            masterRepository.save(masterClass);
            return masterClass;

        }
        return null;
    }

    @Override
    public Question addQuestion(Question question, String emailId,String AssignmentId) {
        if(masterRepository.findById(emailId).isPresent()){

            MasterClass masterClass=masterRepository.findById(emailId).get();
        List<Assignment>   list=    masterClass.getAssignmentList();
        Assignment  assignment= list.stream().filter(i->i.getAssignmentId().equalsIgnoreCase(AssignmentId)).findAny().get();
        List<Question> questions=assignment.getQuestionsList();
        Question question1=new Question(question.getQuestionId(),question.getOperation(),question.getNumber1(),question.getNumber2(),question.getResult());
            questions.add(question1);

            masterRepository.save(masterClass);
            return question1;
        }
        return null;
    }

    @Override
    public List<Question> getQuestion(String emailId,String AssinmentId) {

        if(masterRepository.findById(emailId).isPresent()){

            MasterClass masterClass=masterRepository.findById(emailId).get();
            List<Assignment>   list=    masterClass.getAssignmentList();
            Assignment  assignment= list.stream().filter(i->i.getAssignmentId().equalsIgnoreCase(AssinmentId)).findAny().get();

            List<Question> questions=assignment.getQuestionsList();
            return questions;

    }
return null;


    }

    @Override
    public MasterClass addStudent(Student student, String emailId) {


        if (masterRepository.findById(emailId).isPresent()) {
            MasterClass masterClass = masterRepository.findById(emailId).get();
            List<Student> studentList = masterClass.getStudentList();
 Student student1=new Student(student.getEmailId(),student.getName(),new ArrayList<>());
 studentList.add(student1);
            return masterRepository.save(masterClass);


        }
return null;
    }

    @Override
    public MasterClass addAssignmentToStudent(String studentEmailId, Assignment assignment1, String MasterEmailId) {
        if (masterRepository.findById(MasterEmailId).isPresent()) {
            MasterClass masterClass = masterRepository.findById(MasterEmailId).get();
            List<Student> studentList = masterClass.getStudentList();
            Student student=studentList.stream().filter(i->i.getEmailId().equalsIgnoreCase(studentEmailId)).findAny().get();
            List<Assignment> assignmentList=masterClass.getAssignmentList();
        Assignment assignment =assignmentList.stream().filter(i->i.getAssignmentId().equalsIgnoreCase(assignment1.getAssignmentId())).findAny().get();

        List<Assignment> list=student.getAssignmentList();
        list.add(assignment);
        return masterRepository.save(masterClass);

        }
return null;
    }
}
