import { auth0 } from "@/lib/auth0";
import Header from "./Header";
import Messages from "@/components/Messages";
import { redirect} from 'next/navigation';
import { Suspense } from 'react';
import Error from "@/components/Error";

export default async function Dashboard(){

    const session = await auth0.getSession();
    const user = session?.user;
    let error={};
    
    if(!user){
        redirect("/");
    }

     async function getMessages(){
        const session = await auth0.getSession();
        const user = session?.user;
        
        if(!user){
            redirect("/");
        }

        const tokenSet=session?.tokenSet;
        if(!tokenSet){
            redirect("/");
        }
        const accessToken=tokenSet?.accessToken;
        if(!accessToken){
            redirect("/");
        }

        const URL="https://animals-and-nature-messages-api.onrender.com/messages";
        const resp=await fetch(URL,{
            headers:{
                Authorization: `Bearer ${accessToken}`
            }
        });
        if(resp.ok){
            return resp.json();
        }
        else{
            error=new Object({error: resp,status: resp.status});
        } 
    }

    const allMessages:Promise<Message[]>=getMessages();
    const content=!allMessages ? <Error error={error} /> : <Messages messages={allMessages} />

    return(
        <>
            <Header />
            <main className="m-8">
                <header className="m-8">
                    <h1 className="text-3xl font-bold text-center">
                        Dashboard
                    </h1>
                </header>
                <Suspense fallback={<p className="text-center">loading messages....</p>}>
                    {content}
                </Suspense>
            </main>
        </>
    );
}