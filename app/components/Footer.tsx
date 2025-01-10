import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Facebook,
  Github,
  Instagram,
  LinkedinIcon,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-slate-800 text-white grid sm:gap-8 gap-4 sm:p-8 p-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {/* Brand Section */}
        <div className="sm:space-y-4 space-y-2">
          <h1 className="text-2xl xxs:text-3xl sm:text-4xl font-semibold">
            Curiosity Unfold
          </h1>
          <p className="text-[0.8rem] sm:text-lg">
            Explore, Learn, and Inspire.
          </p>
          <div className="icons flex items-center gap-4">
            <Link href="">
              <Instagram className="sm:w-6 w-5 sm:h-6 h-5" />
            </Link>
            <Link href="">
              <Facebook className="sm:w-6 w-5 sm:h-6 h-5" />
            </Link>
            <Link href="">
              <Twitter className="sm:w-6 w-5 sm:h-6 h-5" />
            </Link>
            <Link href="">
              <Github className="sm:w-6 w-5 sm:h-6 h-5" />
            </Link>
            <Link href="">
              <LinkedinIcon className="sm:w-6 w-5 sm:h-6 h-5" />
            </Link>
          </div>
          <div className="sm:text-[1rem] text-[0.8rem]">
            <Link href="mailto:sadafshahabsr12@gmail.com">
              sadafshahabsr12@gmail.com
            </Link>
          </div>
        </div>

        {/* Navigation Links Section */}
        <div className="grid grid-cols-2 sm:gap-4 gap-2 sm:text-sm text-[0.8rem]">
          <Link
            className="hover:bg-gray-100 hover:text-slate-700 py-1 px-3 rounded-md transition-all duration-300"
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:bg-gray-100 hover:text-slate-700 py-1 px-3 rounded-md transition-all duration-300"
            href="/blog-post"
          >
            Blog
          </Link>
          <Link
            className="hover:bg-gray-100 hover:text-slate-700 py-1 px-3 rounded-md transition-all duration-300"
            href="/"
          >
            About
          </Link>
          <Link
            className="hover:bg-gray-100 hover:text-slate-700 py-1 px-3 rounded-md transition-all duration-300"
            href="/"
          >
            Contact
          </Link>
          <Link
            className="hover:bg-gray-100 hover:text-slate-700 py-1 px-3 rounded-md transition-all duration-300"
            href="/"
          >
            Terms and Condition
          </Link>
          <Link
            className="hover:bg-gray-100 hover:text-slate-700 py-1 px-3 rounded-md transition-all duration-300"
            href="/"
          >
            Privacy and Policy
          </Link>
          <Link
            className="hover:bg-gray-100 hover:text-slate-700 py-1 px-3 rounded-md transition-all duration-300"
            href="/sign-in"
          >
            Sign in
          </Link>
          <Link
            className="hover:bg-gray-100 hover:text-slate-700 py-1 px-3 rounded-md transition-all duration-300"
            href="/sign-up"
          >
            Sign up
          </Link>
        </div>

        {/* Contact Form Section */}
        <div>
          <form action="" className="space-y-4">
            <h1 className="text-xl sm:text-2xl font-semibold">Contact Us</h1>
            <Input placeholder="Email Address" />
            <Textarea placeholder="Message" />
            <Button
              variant={"secondary"}
              className="bg-purple-600 text-white hover:bg-transparent border-white border duration-500"
            >
              Contact
            </Button>
          </form>
        </div>

        {/* Footer Credits */}
      </div>
      <p className="text-center sm:text-lg text-[0.8rem] bg-purple-700 py-4 text-fuchsia-300">
        &copy; 2025 Curiosity Unfold. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
