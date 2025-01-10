import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sign Up | Curiosity Unfold",

};
export default function Page() {
  return (
    <div className="flex justify-center items-center pt-8 bg-heroBg bg-cover bg-center bg-no-repeat h-screen px-10 ">
      <SignUp />

    </div>
  );
}
