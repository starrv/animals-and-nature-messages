package com.animalsandnature.messages;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class ErrorController {

    @RequestMapping("/*")
    public ResponseEntity<ErrorMessage> wrongURL(){
        ErrorMessage errorMsg=new ErrorMessage("Wrong path");
        return new ResponseEntity<>(errorMsg,HttpStatus.NOT_FOUND);
    }
}
