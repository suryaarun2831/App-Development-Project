package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;

@Service
public class UserService
 {
    @Autowired
    UserRepository repo;

    public User edit(User user)
    {
        return repo.save(user);
    }
    public User register(User user)
    {
        return repo.save(user);
    }
    public List<User> login()
    {
       return repo.findAll();
    }
    public void deleteId(Long id)
    {
        repo.deleteById(id);
    }
}
