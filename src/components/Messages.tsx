'use client';

import {use} from 'react';
import { useState } from 'react';
import Message from "@/components/Message";
import Sort from './Sort';
import Search from './Search';
import { ASCENDING_DATE } from './Sort';
import {parseContent} from '@/components/Message';
import Error from './Error';
import { defaultErrorMsg } from './Error';

export default function Messages({
    messages,
}:{
    messages: Promise<Message[]>}){
    
    const allMessages=use(messages);
    const [searchBy,setSearchBy]=useState("");
    const [sortBy,setSortBy]=useState(ASCENDING_DATE);

    if(!allMessages){
        const error={error: {defaultErrorMsg}};
        return(
            <Error error={error} />
        );
    }

    if(allMessages.length<=0){
        return(
            <section>
                <p>
                    No messages
                </p>
            </section>
        )
    }

    const filteredMessages=allMessages.filter((message:Message)=>{
        const decoded=atob(message.content);
        const content=atob(parseContent(message.content).plain);
        const concatedContent=decoded.concat(content);
        return concatedContent.includes(searchBy);
    });
    const sortedMessages=filteredMessages.sort((a:Message,b:Message)=>{
        if(sortBy===ASCENDING_DATE){
            if(new Date(a.mail.timestamp)>new Date(b.mail.timestamp)){
                return 1;
            }
            if(new Date(a.mail.timestamp)<new Date(b.mail.timestamp)){
                return -1;
            }
            return 0;
        }
        else{
            if(new Date(a.mail.timestamp)>new Date(b.mail.timestamp)){
                return -1;
            }
            if(new Date(a.mail.timestamp)<new Date(b.mail.timestamp)){
                return 1;
            }
            return 0;
        }
    });

    return(
        <section className="mx-auto w-full my-8">
            <h2 className="text-2xl font-bold text-center mx-auto my-8">
                Messages
            </h2>
            <Sort setSortBy={setSortBy} />
            <Search setSearchBy={setSearchBy} />
            <div className="flex flex-wrap justify-center mx-auto">
                {sortedMessages.map((message:Message)=><Message message={message} key={message.id} />)}
            </div>
        </section>
    );
    
}
    
