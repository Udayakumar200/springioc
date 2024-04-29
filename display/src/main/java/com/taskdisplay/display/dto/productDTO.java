package com.taskdisplay.display.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class productDTO {

    private Long id;
    private String Name;

    private Long price;
    private String category;
}
