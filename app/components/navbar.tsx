import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center">
      <ul className="flex justify-between w-11/12 md:justify-around md:w-1/2 mt-4 h-2">
        <li className="hover:underline decoration-2">
          <a href="https://theo-pierson.vercel.app/">portfolio</a>
        </li>
        <li className="">
          <a
            className="duration-200 p-2 bg-black text-white rounded-full hover:text-black hover:bg-white hover:border-2 border-black"
            href="https://buymeacoffee.com/theopierson"
          >
            buy me a coffee
          </a>
        </li>
        <li className="hover:underline decoration-2">
          <a href="https://github.com/TheoPIERSON">github</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
