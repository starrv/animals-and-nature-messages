"use client";

import Link from "next/link";

export default function LoginButton() {
  return (
    <Link
      href={{
        pathname: "/auth/login",
        query:{
            audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE,
            scope: process.env.NEXT_PUBLIC_AUTH0_SCOPE
        }
      }}
      className="w-full text-center inline-block px-6 py-3 bg-gradient-to-b from-[#2d2d42] to-[#161620] hover:opacity-90 text-white font-medium rounded-full text-[14px] transition-opacity"
    >
      Login
    </Link>
  );
}