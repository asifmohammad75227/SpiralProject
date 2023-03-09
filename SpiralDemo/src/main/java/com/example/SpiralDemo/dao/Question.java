package com.example.SpiralDemo.dao;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Document
public class Question {
    @Id
    private  String questionId;
    private String operation;
    private  String number1;
    private String number2;
    private String result;
}
