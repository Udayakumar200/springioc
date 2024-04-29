package com.jsk.feedback.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class feedbackDTO {
    private Long id;
    private String name;
    private String bookName;
    private String feedback;
}


