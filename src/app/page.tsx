"use client";

const data = {
  title: "Community for Connection, Creativity & Collaboration",
  subTitle:
    " Made by and for creatives who believe in the power of ideas and the joy of making them happen",
  cta: "Join our community",
};

export default function Home() {
  const { title, subTitle, cta } = data;
  const handleCTAClick = () => {};
  return (
    <div className="flex flex-col items-center justify-center space-y-5 w-full h-screen">
      <h1 className="text-7xl text-center px-[100px] font-semibold leading-tight dm-serif-text-regular">
        {title}
      </h1>
      <p>{subTitle}</p>
      <button
        onClick={handleCTAClick}
        className="border-2 border-black rounded-full p-4 hover:bg-black hover:text-white"
      >
        {cta}
      </button>
    </div>
  );
}
