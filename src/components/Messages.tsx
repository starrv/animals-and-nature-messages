import { auth0 } from "@/lib/auth0";
import { redirect} from 'next/navigation';
import Message from "@/components/Message";
import Error from "@/components/Error";

export default async function Messages(){

    let data =await loadData();
    const defaultErrorMsg="An error has occurred :(";

    async function loadData(){
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
            return await resp.json();
        }
        else{
            return new Object({error: await resp.json(),status: resp.status});
        } 
    }

   let content;
   if(data.error){
        console.log(data);
        content=<Error message={data.error.error ? data.error.error : defaultErrorMsg} />
    }
    else{
        if(data.length<=0){
            content=<p>No messages</p>
        }
        else{
            data.map((message:Message)=><Message message={message} key={message.id} />)
        }
    }
    
    return(
        <section className="mx-auto w-1/2">
            <h2 className="text-2xl font-bold text-center my-4">
                Messages
            </h2>
            {content}
        </section>
    );
    
}
    
