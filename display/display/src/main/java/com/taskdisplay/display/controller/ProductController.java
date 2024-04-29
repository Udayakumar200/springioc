package com.taskdisplay.display.controller;

import com.taskdisplay.display.dto.productDTO;
import com.taskdisplay.display.entity.Products;
import com.taskdisplay.display.service.productService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/product")
public class ProductController {
    private  final productService ProductService;

    @PostMapping
    public ResponseEntity<productDTO>createProducts(@RequestBody productDTO ProductDTO){
        productDTO savedProducts = ProductService.createProducts(ProductDTO);
        return new ResponseEntity<>(savedProducts, HttpStatus.CREATED);

    }
@GetMapping
    public  ResponseEntity<List<productDTO>>getAllProducts(){
        List<productDTO>products = ProductService.getAllProducts();
        return ResponseEntity.ok(products);
}
@GetMapping("/all")
    public  ResponseEntity<List<productDTO>>viewProducts(){
        List<productDTO>products =ProductService.viewProducts();
        return ResponseEntity.ok(products);
}

}
