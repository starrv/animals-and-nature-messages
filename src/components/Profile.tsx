"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

export default function Profile() {
  const { user, isLoading } = useUser();

  if (isLoading) return <p className="text-xs text-gray-500">Loading...</p>;
  if (!user) return null;

  return (
    <section>
        <h1>
            Profile Information:
        </h1>
        <div className="flex items-center gap-2 text-green-500 text-[13px] font-medium">
            <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shrink-0">
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </span>
            Successfully authenticated
        </div>
        <div className="flex items-center gap-2 py-1.5 pl-1.5 pr-4 text-[12px] text-gray-700 max-w-full">
            <div>
                <p>
                    <span className="font-bold">Name</span>: <span className="truncate">{user.name}</span>
                </p>
                <p>
                     <span className="font-bold">Email</span>: <span className="truncate">{user.email}</span>
                </p> 
            </div>
      </div>
    </section>
  );
}