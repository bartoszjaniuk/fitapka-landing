import React from "react";

export const Navbar = () => {
  return (
    <div className="w-full responsive-padding fixed">
      <nav
        className="
    container
    bg-background
    flex
    items-center 
    justify-center
    max-w-[430px]
gap-8 
rounded-lg"
      >
        <button>
          <img src="/assets/logo-transparent.png" className="w-16" />
        </button>
        <ul className="flex gap-8">
          <li>MISJA</li>
          <li>OFERUJEMY</li>
          <li>POBIERZ</li>
        </ul>
      </nav>
    </div>
  );
};
