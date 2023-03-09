package com.example.SpiralDemo.repository;

import com.example.SpiralDemo.dao.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User,String> {



}
