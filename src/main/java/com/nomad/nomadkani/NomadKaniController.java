package com.nomad.nomadkani;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class NomadKaniController {
    @RequestMapping("/hello")
    public String hello(){
        return "Hello World!";  
    } 
}








