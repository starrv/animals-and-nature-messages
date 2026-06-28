'use client';

import { useUser } from "@auth0/nextjs-auth0/client";
import { redirect} from 'next/navigation';

export default function Messages(){

    const { user, isLoading } = useUser();
   
    if (isLoading) return <p className="text-xs text-gray-500">Loading...</p>;
    if (!user) redirect("/");

    const data=fetch("/api");
    
    return(
        <section>
            <h2>
                Messages
            </h2>
        </section>
    );
    
}
    
