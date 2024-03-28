package com.animalsandnature.messages;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.security.oauth2.server.resource.web.server.authentication.ServerBearerTokenAuthenticationConverter;
import org.springframework.web.bind.annotation.*;

import java.net.http.HttpRequest;
import java.util.*;

@CrossOrigin
@RestController
public class MessagesController {

    @Autowired
    MessageRepository messageRepo;
    HashMap<Long,Message> messages=new HashMap<Long, Message>();


    @GetMapping(value = "/messages")
    public List<Message> messages(){
        /*List<Message> msgs= new ArrayList<Message>();
        Collection c=messages.values();
        Iterator<Message> iterator=c.iterator();
        while(iterator.hasNext()){
            msgs.add(iterator.next());
        }
        return msgs;*/

        System.out.println("Getting messages");
        return messageRepo.findMessagesByNotificationType("Received");
    }

    @GetMapping("/messages/{id}")
    public Message messageById(@PathVariable String id) throws RuntimeException{
        Message msg=messageRepo.findMessageByIdAndNotificationType(id,"Received");
        if(msg!=null){
            return msg;
        }
        throw new MessageNotFoundException("Message does not exist");
    }

    @PostMapping("/messages")
    @ResponseStatus(HttpStatus.CREATED)
    public Message addMessage(@RequestBody Message msg){
        /*long newId=messages.size();
        msg.setId(newId);
        messages.put(newId,msg);
        return messages.get(newId);*/
        System.out.println("Saving message");
        return messageRepo.save(msg);
    }

    @ExceptionHandler
    public ResponseEntity<ErrorMessage> errorHandleNotFound(Exception e){
        ResponseEntity<ErrorMessage> resp=new ResponseEntity<ErrorMessage>(new ErrorMessage(e.getMessage()),HttpStatus.NOT_FOUND);
        return resp;
    }



}
