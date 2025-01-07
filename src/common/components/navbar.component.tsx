import React from "react";
import Link from "next/link";
import DeveloperRoutesLogo from "@developer-routers/common/components/logo.component";

function NavBar() {
  const navList = [
    {
      title: "Feature 1",
      path: "/events",
    },
    {
      title: "Feature 2",
      path: "/link2",
    },
  ];
  return (
    <header className="border-2 border-zinc-800 rounded-full flex m-5 justify-between items-center px-5">
      <div className="m-2 flex items-center">
        <p className="font-bold text-2xl text-slate-800 dm-serif-text-regular ">
          Developer Routes
        </p>
      </div>
      <div className="flex justify-center items-center">
        <nav className="text-sm">
          <ul className="flex p-3">
            {navList.map((item) => (
              <Link key={item.title} href={`${item.path}`} className="p-2">
                {item.title}
              </Link>
            ))}
          </ul>
        </nav>
        <div>
          <button className="border-2 p-2 px-5 rounded-full">Join Now</button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
