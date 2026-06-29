'use client';

import { useUser } from "@auth0/nextjs-auth0/client";
import {useState} from 'react';
import LogoutButton from "@/components/LogoutButton";
import Profile from "@/components/Profile";
import { redirect} from 'next/navigation';

export default function Header(){

    const [show,setShow]=useState(false);
    const { user, isLoading } = useUser();

    if (isLoading) return <p className="text-xs text-gray-500">Loading...</p>;
    if (!user) redirect("/");

    function getInitials(name?: string | null, email?: string | null): string {
        if (name) {
            const parts = name.trim().split(" ");
            return parts.length >= 2
            ? `${parts[0][0]}${parts[1][0]}`.toUpperCase()
            : parts[0].slice(0, 2).toUpperCase();
        }
        if (email) return email.slice(0, 2).toUpperCase();
        return "U";
    }

    return(
            <header className="bg-amber-50 p-2">
                {user.picture ? (<img src={user.picture} alt="user picture" onClick={()=>setShow(!show)} className="rounded-full" width="32" height="32" />) :  <span className="w-7 h-7 bg-gradient-to-b from-[#2d2d42] to-[#161620] rounded-full flex items-center justify-center text-white text-[10px] font-semibold shrink-0"> {getInitials(user.name, user.email)}
                </span>}
                <div className={`w-sm border m-2 p-2 rounded ${!show ? 'hidden': ''}`}>
                    <Profile />
                    <LogoutButton />
                </div>
            </header>
    );
}