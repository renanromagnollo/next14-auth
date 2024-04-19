"use client"

import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Home() {



  return (
    <main className="flex justify-center items-center h-screen">
      <button 
        className="btn btn-primary" 
        onClick={() => signIn('github', {callbackUrl: "/dashboard"})}
      >
        Login com Github
      </button>
    </main>
  );
}
