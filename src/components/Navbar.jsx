import React from "react";
import { Bot, Sun } from "lucide-react";

// This function returns a Navbar component
const Navbar = () => {
  // Return a JSX element
  return (
    <>
      <div
        className="nav flex items-center justify-between h-[60px] bg-zinc-900 px-[150px] "
        style={{ padding: "0px 150px" }}
      >
        <div className="logo flex items-center gap-10px">
          <Bot size={30} color="#c47b23" />
          <span className="text-2xl font-bold text-white ml-2">CodeMate</span>
        </div>
        <div className="icons flex items-center gap-20px">
          <i className="cursor-pointer transition-all hover:text-[#c47b23]">
            <Sun />
          </i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
