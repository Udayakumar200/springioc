package com.jsk.feedback.controller;


import com.jsk.feedback.dto.feedbackDTO;
import com.jsk.feedback.service.impl.feedbackImpl;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/feedback")
public class feedbackcontroller {
    private final feedbackImpl feedbackService;
    @PostMapping
    public String saveFeedback(@RequestBody feedbackDTO feedbackDTO) {
        feedbackService.createfeedback(feedbackDTO);
        return "Feedback saved!";

    }
}
