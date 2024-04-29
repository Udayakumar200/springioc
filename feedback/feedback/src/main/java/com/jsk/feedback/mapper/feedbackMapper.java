package com.jsk.feedback.mapper;

import com.jsk.feedback.dto.feedbackDTO;
import com.jsk.feedback.entity.feedback;

public class feedbackMapper {
    public  static feedbackDTO mapTofeedbackDTO(feedback Feedback){
        return  new feedbackDTO(
                Feedback.getId(),
                Feedback.getName(),
                Feedback.getBookName(),
                Feedback.getFeedback()

        );
    }
    public  static feedback mapTofeedback(feedbackDTO FeedbackDTO) {
        return new feedback(
                FeedbackDTO.getId(),
                FeedbackDTO.getName(),
                FeedbackDTO.getBookName(),
                FeedbackDTO.getFeedback()
        );
    }
}
