package rot13service.controllers;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rot13service.services.Rot13service;

@RestController
@AllArgsConstructor
@RequestMapping("/rot13")
@CrossOrigin(origins = "*", allowedHeaders =  "*")
public class Rot13Controller {
    private final Rot13service rot13service;

    @GetMapping("/decode")
    public ResponseEntity<String> handleDecodeRequest(@RequestParam String message) {
        System.out.println(message);
        return new ResponseEntity<>(rot13service.translateMessage(message), HttpStatus.ACCEPTED);
    }


}
