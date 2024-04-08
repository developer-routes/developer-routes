'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();
  return (
    <div className="flex flex-col mt-10 items-center space-y-5 w-full h-screen  p-[100px]">
      <h1 className="text-7xl font-semibold text-center">
      Empower Developers with Powerful Tools to Build Amazing Things
      </h1>
      <p>
      Boost your developer workflow and accelerate innovation with our comprehensive suite of tools.
      </p>
      <button onClick={()=>{
        route.push('https://discord.gg/9s2SanmY')
      }} className="border-2 rounded-full p-4 hover:bg-blue-950">
        View All Our Products
      </button>
    </div>
  );
}
