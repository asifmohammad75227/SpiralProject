package com.example.SpiralDemo.repository;

import com.example.SpiralDemo.dao.MasterClass;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MasterRepository extends MongoRepository<MasterClass,String> {
}
