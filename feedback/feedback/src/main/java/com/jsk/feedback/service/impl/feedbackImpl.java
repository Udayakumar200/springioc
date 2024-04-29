package com.jsk.feedback.service.impl;

import com.jsk.feedback.dto.feedbackDTO;
import com.jsk.feedback.entity.feedback;
import com.jsk.feedback.mapper.feedbackMapper;
import com.jsk.feedback.repo.feedbackRepo;
import com.jsk.feedback.service.feedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class feedbackImpl implements feedbackService {

    private final feedbackRepo FeedbackRepo;
    @Autowired
    public feedbackImpl(feedbackRepo FeedbackRepo) {
        this.FeedbackRepo = FeedbackRepo;
    }
    @Override
    public feedbackDTO createfeedback(feedbackDTO FeedbackDTO) {
        feedback Feedback = feedbackMapper.mapTofeedback(FeedbackDTO);
        feedback savedFeedback = FeedbackRepo.save(Feedback);
        return feedbackMapper.mapTofeedbackDTO(savedFeedback);
    }

    @Override
    public feedbackDTO savefeedback(feedback Feedback) {
        feedback savedFeedback = FeedbackRepo.save(Feedback);
        return feedbackMapper.mapTofeedbackDTO(savedFeedback);
    }

    @Override
    public List<feedbackDTO> getAllfeeback() {
        List<feedback>feedbackList=FeedbackRepo.findAll();

        return feedbackList.stream().map((Feedback)->feedbackMapper.mapTofeedbackDTO(Feedback))
                .collect(Collectors.toList());
    }
}
