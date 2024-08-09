package com.example.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Stories;
import com.example.backend.service.StoryService;

@RestController
@CrossOrigin
@RequestMapping("/api/stories")
public class StoryController {

    @Autowired
    private StoryService storyService;

    @GetMapping
    public List<Stories> getAllStories() {
        return storyService.getAllStories();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Stories> getStoryById(@PathVariable Long id) {
        Optional<Stories> story = storyService.getStoryById(id);
        if (story.isPresent()) {
            return ResponseEntity.ok(story.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public Stories createStory(@RequestBody Stories story) {
        return storyService.saveStory(story);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Stories> updateStory(@PathVariable Long id, @RequestBody Stories storyDetails) {
        try {
            Stories updatedStory = storyService.updateStory(id, storyDetails);
            return ResponseEntity.ok(updatedStory);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStory(@PathVariable Long id) {
        storyService.deleteStory(id);
        return ResponseEntity.noContent().build();
    }
}
