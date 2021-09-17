package base.controllers;

import base.services.Dec2OctService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import base.services.Rot13service;

@RestController
@AllArgsConstructor
@RequestMapping("/dec2oct")
@CrossOrigin(origins = "*", allowedHeaders =  "*")
public class DecToOctController {
    private final Dec2OctService dec2octservice;

    @GetMapping("/convert")
    public ResponseEntity<String> handleDecodeRequest(@RequestParam String decString) {
        System.out.println(decString);
        return new ResponseEntity<>(dec2octservice.convert2octal(decString), HttpStatus.ACCEPTED);
    }

}
