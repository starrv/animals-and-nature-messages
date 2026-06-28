import { auth0 } from "@/lib/auth0";
import { redirect} from 'next/navigation';

export async function GET(request: Request) {
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
    console.log("Acces")
    console.log("Access Token: ",session.tokenSet.accessToken);
    console.log("Audience: ",session.tokenSet.audience);
    console.log("Requested Scope: ",session.tokenSet.requestedScope);
    console.log("Scope: ",session.tokenSet.scope);

    const URL="https://animals-and-nature-messages-api.onrender.com/messages";
    const resp=await fetch(URL,{
        headers:{
            Authorization: `Bearer ${accessToken}`
        }
    });
    if(resp.ok){
        const data=await resp.json();
        return new Response(data,{status: 200});
    }
    else{
        return new Response(JSON.stringify({data: resp.json ? resp.json : resp.statusText}),{status: resp.status});
    } 
}