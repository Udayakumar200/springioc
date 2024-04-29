package com.jsk.feedback.repo;

import com.jsk.feedback.entity.feedback;
import org.springframework.data.jpa.repository.JpaRepository;

public interface feedbackRepo extends JpaRepository<feedback,Long> {

}
