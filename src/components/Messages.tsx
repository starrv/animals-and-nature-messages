import { auth0 } from "@/lib/auth0";
import { redirect} from 'next/navigation';
import Message from "@/components/Message";

export default async function Messages(){

    let data:Message[] =await loadData();

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
            throw new Error(JSON.stringify({message: await resp.json(),status: resp.status}));
        } 
    }

   
    
    return(
        <section className="mx-auto w-1/2">
            <h2 className="text-2xl font-bold text-center my-4">
                Messages
            </h2>
            {data.map((message:Message)=><Message message={message} key={message.id} />)}
        </section>
    );
    
}
    
