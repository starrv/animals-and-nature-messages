import { auth0 } from "@/lib/auth0";
import Header from "./Header";
import Messages from "@/components/Messages";
import { redirect} from 'next/navigation';

export default async function Dashboard(){

    const session = await auth0.getSession();
    const user = session?.user;
    
    if(!user){
        redirect("/");
    }

    return(
        <>
            <Header />
            <main>
                <h1 className="text-3xl font-bold text-center m-4">
                    Dashboard
                </h1>
                <Messages />
            </main>
        </>
    );
}