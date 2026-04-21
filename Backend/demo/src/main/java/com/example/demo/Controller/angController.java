package com.example.demo.Controller;

import com.example.demo.Entity.ang;
import com.example.demo.Service.angService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/posts")
@CrossOrigin(origins = "http://localhost:4200")
public class angController {

    private final angService service;

    public angController(angService service) {
        this.service = service;
    }

    @GetMapping
    public List<ang> getAll() {
        return service.getAllPosts();
    }

    @GetMapping("/{id}")
    public ang getOne(@PathVariable Long id) {
        return service.getPost(id);
    }

    @PostMapping
    public ang create(@RequestBody ang post) {
        return service.createPost(post);
    }

    @PutMapping("/{id}")
    public ang update(@PathVariable Long id, @RequestBody ang post) {
        return service.updatePost(id, post);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.deletePost(id);
    }
}