package com.taskdisplay.display.service;

import com.taskdisplay.display.dto.productDTO;

import java.util.List;

public interface productService {
    productDTO createProducts(productDTO ProductDTO );
   List <productDTO> viewProducts ();
   List <productDTO> getAllProducts ();

}