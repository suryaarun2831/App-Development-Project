package com.example.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Stories;
import com.example.backend.repository.StoryRepository;

@Service
public class StoryService {

    @Autowired
    private StoryRepository storyRepository;

    public List<Stories> getAllStories() {
        return storyRepository.findAll();
    }

    public Optional<Stories> getStoryById(Long storyId) {
        return storyRepository.findById(storyId);
    }

    public Stories saveStory(Stories story) {
        return storyRepository.save(story);
    }

    public void deleteStory(Long storyId) {
        storyRepository.deleteById(storyId);
    }

    public Stories updateStory(Long storyId, Stories storyDetails) {
        Stories story = storyRepository.findById(storyId).orElseThrow(() -> new RuntimeException("Story not found"));
        story.setTitle(storyDetails.getTitle());
        story.setDescription(storyDetails.getDescription());
        return storyRepository.save(story);
    }
}
