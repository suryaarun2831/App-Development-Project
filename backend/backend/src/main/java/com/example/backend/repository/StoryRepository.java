package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.model.Stories;

@Repository
public interface StoryRepository extends JpaRepository<Stories, Long> {
}
