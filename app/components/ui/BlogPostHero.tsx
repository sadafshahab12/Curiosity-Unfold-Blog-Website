"use client";
import { BookOpenCheck } from "lucide-react";
import React, { useContext } from "react";
import Image from "next/image";
import { BlogContext } from "@/app/context/Context";
import { BlogContextType } from "@/app/type/dataType";
const BlogPostHero = () => {
  const { text } = useContext(BlogContext) as BlogContextType;
  return (
    <>
      <div className="bgs grid sm:grid-cols-3 xxs:grid-cols-2 grid-cols-1 opacity-70 pt-16">
        <Image
          src="/images/blog-post-page/bg1.webp"
          alt="blog-bg"
          width={800}
          height={800}
        />
        <Image
          src="/images/blog-post-page/minim.jpg"
          alt="blog-bg"
          width={800}
          height={800}
          className="xxs:block hidden"
        />
        <Image
          src="/images/blog-post-page/tech.jpg"
          alt="blog-bg"
          width={800}
          height={800}
          className="h-full object-cover sm:block hidden"
        />
      </div>
      <div className="content lg:p-10 p-5 sm:space-y-8 space-y-4">
        <h1 className="lg:text-4xl sm:text-3xl xxs:text-2xl text-xl font-semibold text-slate-700 xs:text-left text-center">
          Exploring Ideas, Technology, and Stories
        </h1>
        <div className="flex items-center xs:flex-row flex-col xs:gap-4 gap-2 xs:h-10 h-[7rem]">
          <BookOpenCheck className="xxs:w-10 w-8 xxs:h-10 h-8 text-purple-600 border border-purple-700 rounded-md xxs:p-2 p-1 hover:border-slate-700 hover:bg-slate-700 hover:text-white transition-all duration-300 ease-in cursor-pointer" />

          <p className="font-semibold xs:text-[1rem] text-[0.8rem]">
            Authored by{" "}
          </p>
          <p className="text-purple-600 xs:text-3xl xxs:text-2xl text-xl font-semibold ">
            {text}
          </p>
        </div>
        <p className=" bg-slate-800 text-fuchsia-300 py-2 text-center xs:text-lg text-sm tracking-wider">
          Where Stories Shape Tomorrow
        </p>
        <div className="text-slate-700 space-y-3 ">
          <p className="xs:text-[1rem] text-[0.8rem] xs:text-center text-justify">
            Step into a world where everyday experiences meet the limitless
            possibilities of technology.
          </p>
          <p className="sm:text-xl xs:text-lg xxs:text-sm text-[0.8rem]  sm:w-[80%] w-full xs:leading-8 leading-6 mx-auto animation animate-pulse xs:text-center text-justify">
            {" "}
            Join me,{" "}
            <span className="font-bold text-purple-700">Sadaf Shahab</span>, as
            we explore ideas, share insights, and uncover the innovations
            shaping our future. {`Let’s`} create, learn, and inspire together!
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogPostHero;
