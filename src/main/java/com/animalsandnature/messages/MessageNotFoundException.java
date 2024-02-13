package com.animalsandnature.messages;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.NOT_FOUND)
public class MessageNotFoundException extends RuntimeException{


    public MessageNotFoundException(String msg){
        super(msg);
    }


}
