"use client";
import React from "react";
import Button from "./ui/Button";
import { useUser } from "@clerk/nextjs";

const Hero = () => {
  const { isSignedIn, user } = useUser();

  const firstname = user?.firstName
    ? user.firstName.charAt(0).toUpperCase() +
      user?.firstName?.slice(1).toLowerCase()
    : "";
  const lastname = user?.lastName
    ? user.lastName.charAt(0).toUpperCase() +
      user?.lastName?.slice(1).toLowerCase()
    : "";

  return (
    <div className="flex justify-center items-center bg-heroBg bg-cover bg-center bg-no-repeat sm:pt-20 xxs:pt-10 pt-20 sm:pb-10 pb-5  sm:px-10 px-5  md:h-[37rem] xxs:h-[28rem]  h-[28rem] ">
      <div className="md:space-y-8 space-y-4 text-center ">
        {isSignedIn ? (
          <p className="xs:text-xl text-[0.9rem] tracking-widest">
            Hello!{" "}
            <span className="font-semibold xs:text-xl text-[0.9rem] ">
              {firstname} {lastname}
            </span>
          </p>
        ) : (
          <p></p>
        )}

        <h1 className="md:text-5xl sm:text-4xl xs:text-3xl text-2xl font-semibold text-slate-800">
          Welcome to{" "}
          <span className="text-purple-600  capitalize">Curiosity Unfold</span>
        </h1>
        <p className="capitalize text-slate-700 sm:text-sm text-[0.7rem] lg:w-[70%] md:[85%] w-full mx-auto sm:leading-7 xs:leading-6 leading-5 font-medium">
          At Curiosity Unfold, we explore the intersection of real-world
          experiences and cutting-edge technology. Whether {`you're`} here to
          find motivation in personal stories or dive deep into the latest tech
          trends, {`there's`} something for everyone. Join the conversation,
          share your thoughts, and {`let's`} build a community together.
        </p>
        <div>
          <Button btnText="Explore Now" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
