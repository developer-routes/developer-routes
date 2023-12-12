'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();
  return (
    <div className="flex flex-col mt-10 items-center space-y-5 w-full h-screen ">
      <h1 className="text-7xl font-semibold leading-tight">
        Community for Connection, <br></br> Creativity & Collaboration
      </h1>
      <p>
        Made by and for creatives who believe in the power of ideas and the joy
        of making them happen
      </p>
      <button onClick={()=>{
        route.push('https://discord.gg/9s2SanmY')
      }} className="border-2 rounded-full p-4 hover:bg-blue-950">
        Join our community
      </button>
    </div>
  );
}
