package com.taskdisplay.display.service.impl;

import com.taskdisplay.display.Mapper.productMapper;
import com.taskdisplay.display.dto.productDTO;
import com.taskdisplay.display.entity.Products;

import com.taskdisplay.display.repo.productRepo;
import com.taskdisplay.display.service.productService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class productImpl  implements productService {

    private  final productRepo  ProductRepo;
    @Autowired
    public productImpl(productRepo ProductRepo){
        this.ProductRepo = ProductRepo;

    }
    @Override
    public productDTO createProducts(productDTO ProductDTO) {
        Products products = productMapper.mapToProducts(ProductDTO);
        Products savedProducts = ProductRepo.save(products);
        return productMapper.mapToproductDTO(savedProducts);
    }

    @Override
    public List<productDTO> viewProducts() {
        List<Products> productsList = ProductRepo.findAll();
        return productsList.stream()
                .map(productMapper::mapToproductDTO)
                .collect(Collectors.toList());
    }


    @Override
    public List<productDTO> getAllProducts() {
        List<Products>productsList = ProductRepo.findAll();

        return productsList.stream().map((products)->productMapper. mapToproductDTO(products))
                .collect(Collectors.toList());

    }
}

