package com.jsk.feedback.service;

import com.jsk.feedback.dto.feedbackDTO;
import com.jsk.feedback.entity.feedback;

import java.util.List;

public interface feedbackService {
    feedbackDTO createfeedback(feedbackDTO FeedbackDTO);
    feedbackDTO savefeedback(feedback Feedback);
    List<feedbackDTO>getAllfeeback();

}
