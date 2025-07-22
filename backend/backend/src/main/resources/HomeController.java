package com.yourname.projectname.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HomeController {
    
    @GetMapping("/health")
    public String health() {
        return "Backend is running successfully!";
    }
}
