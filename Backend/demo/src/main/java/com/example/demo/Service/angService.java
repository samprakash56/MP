package com.example.demo.Service;

import com.example.demo.Entity.ang;
import com.example.demo.Repository.angRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class angService {

    private final angRepository repo;

    public angService(angRepository repo) {
        this.repo = repo;
    }

    public List<ang> getAllPosts() {
        return repo.findAll();
    }

    public ang getPost(Long id) {
        return repo.findById(id).orElseThrow();
    }

    public ang createPost(ang post) {
        return repo.save(post);
    }

    public ang updatePost(Long id, ang updatedPost) {
        ang post = repo.findById(id).orElseThrow();

        post.setTitle(updatedPost.getTitle());
        post.setBody(updatedPost.getBody());
        post.setUserId(updatedPost.getUserId());

        return repo.save(post);
    }

    public void deletePost(Long id) {
        repo.deleteById(id);
    }
}