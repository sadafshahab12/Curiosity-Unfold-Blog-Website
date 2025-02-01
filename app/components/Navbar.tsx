"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  // const [isLoggedIn, setIsLoggedin] = useState(true);
  const { isSignedIn, isLoaded } = useUser();
  const [left, setLeft] = useState("-100%");

  const toggleNav = () => {
    setLeft((prevLeft) => (prevLeft === "-100%" ? "0" : "-100%"));
  };
  const closeNav = () => {
    setLeft("-100%");
  };

  return (
    <header>
      <nav className="flex items-center justify-between bg-slate-800 lg:px-10 px-5 py-3 fixed w-full z-40">
        <div className="flex items-center gap-4">
          <AlignJustify
            className="w-5 h-5 text-fuchsia-300 cursor-pointer md:hidden block"
            onClick={toggleNav}
          />
          <Link href="/">
            <h1 className="text-fuchsia-300 font-semibold lg:text-2xl xs:text-xl text-lg">
              Curiosity Unfold
            </h1>
          </Link>
        </div>
        {/* web navbar  */}
        <div className="hidden text-white  text-sm md:flex lg:space-x-8 space-x-4">
          <Link
            className="hover:bg-gray-100 hover:text-slate-700 py-1 px-3 rounded-md transition-all ease-in duration-300"
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:bg-gray-100 hover:text-slate-700 py-1 px-3 rounded-md transition-all ease-in duration-300"
            href="/blog-post"
          >
            Blog
          </Link>
          <Link
            className="hover:bg-gray-100 hover:text-slate-700 py-1 px-3 rounded-md transition-all ease-in duration-300"
            href="/"
          >
            About
          </Link>
          <Link
            className="hover:bg-gray-100 hover:text-slate-700 py-1 px-3 rounded-md transition-all ease-in duration-300"
            href="/"
          >
            Contact
          </Link>
        </div>
        {/* mobile nav  */}
        <div
          className=" md:hidden text-white  text-sm flex flex-col items-start h-screen gap-8  absolute top-[3.25rem]  bg-slate-800 w-full py-5 px-12 z-40 transition-all duration-300"
          style={{ left }}
        >
          <Link
            className="hover:bg-gray-100 hover:text-slate-700 py-1 px-3 rounded-md transition-all ease-in duration-300"
            href="/"
            onClick={closeNav}
          >
            Home
          </Link>
          <Link
            className="hover:bg-gray-100 hover:text-slate-700 py-1 px-3 rounded-md transition-all ease-in duration-300"
            href="/blog-post"
            onClick={closeNav}
          >
            Blog
          </Link>
          <Link
            className="hover:bg-gray-100 hover:text-slate-700 py-1 px-3 rounded-md transition-all ease-in duration-300"
            href="/"
            onClick={closeNav}
          >
            About
          </Link>
          <Link
            className="hover:bg-gray-100 hover:text-slate-700 py-1 px-3 rounded-md transition-all ease-in duration-300"
            href="/"
            onClick={closeNav}
          >
            Contact
          </Link>
        </div>
        {/* login  */}
        <div>
          {isLoaded &&
            (isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <Link href="/sign-in">
                <button className="border border-fuchsia-300  py-1 xs:px-4 px-2 rounded-md text-fuchsia-300 hover:bg-slate-900 xs:text-sm text-[0.7rem] active:scale-95 transition-all ease-in duration-300">
                  Sign in
                </button>
              </Link>
            ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
