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
public class User {

    @Id
    private  String emailId;
    private String phoneNumber;
    private  String name,rollUser,password;


}
