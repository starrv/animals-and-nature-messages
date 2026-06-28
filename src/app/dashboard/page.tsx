import { auth0 } from "@/lib/auth0";
import { redirect} from 'next/navigation';
import Dashboard from "@/components/Dashboard";

export default async function Page(){

    const session = await auth0.getSession();
    const user = session?.user;
    
    if(!user){
        redirect("/");
    }

    return(
        <>
            <Dashboard />
        </>
    );
}