import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex p-3 h-screen bg-gradient-to-b from-black to-blue-900">
      <div className='flex flex-col mt-10 items-center space-y-5 w-full '>
          <h1 className='text-7xl font-semibold leading-tight'>Community for Connection, <br></br> Creativity & Collaboration</h1>
          <p>Made by and for creatives who believe in the power of ideas and the joy of making them happen</p>
          <button className='border-2 rounded-full p-4 hover:bg-blue-950'>Join our community</button>
      </div>
    </main>
  )
}
