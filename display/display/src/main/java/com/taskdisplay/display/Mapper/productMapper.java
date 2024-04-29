package com.taskdisplay.display.Mapper;

import com.taskdisplay.display.dto.productDTO;
import com.taskdisplay.display.entity.Products;

public class productMapper {
    public  static productDTO mapToproductDTO(Products products){
        return new productDTO(
        products.getId(),
        products.getName(),
        products.getPrice(),
        products.getCategory()
                );
    }

    public static  Products mapToProducts(productDTO ProductDTO){
        return new Products(
                ProductDTO.getId(),
                ProductDTO.getName(),
                ProductDTO.getPrice(),
                ProductDTO.getCategory()

        );

    }
}

