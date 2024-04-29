package com.taskdisplay.display.repo;

import com.taskdisplay.display.entity.Products;
import org.springframework.data.jpa.repository.JpaRepository;

public interface productRepo  extends JpaRepository<Products ,Long> {
}
