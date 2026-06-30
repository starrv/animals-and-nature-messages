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
            <main className="m-8">
                <header className="m-8">
                    <h1 className="text-3xl font-bold text-center">
                        Dashboard
                    </h1>
                </header>
                <Messages />
            </main>
        </>
    );
}