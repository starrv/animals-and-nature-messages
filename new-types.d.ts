class Message{
    id:string;
    content:string;
    notificationType:string;
    mail:Mail;

    constructor(id:string,content:string,notificationType:string,mail:Mail=null){
        this.id=id;
        this.content=content;
        this.notificationType=notificationType;
        if(Mail) this.mail=mail;
    }
}

class Mail{
    headers:Header[];
    timestamp:string;

    constructor(headers:Header[], timestamp:string){
        this.headers=headers;
        this.timestamp=timestamp;
    }
}

class Header{
    name:string;
    value:Object; 
    
    constructor(name:string,value:Object){
        this.name=name;
        this.value=value;
    }
}