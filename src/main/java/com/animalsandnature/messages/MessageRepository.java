package com.animalsandnature.messages;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface MessageRepository extends MongoRepository<Message,String> {

    Message findMessageByIdAndNotificationType(String id,String notificationType);

    Message save(Message msg);

    @Query(value="{notificationType: '?0'}")
    List<Message> findMessagesByNotificationType(String notificationType);

}
