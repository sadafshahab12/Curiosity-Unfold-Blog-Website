import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sign In | Curiosity Unfold",

};
export default function Page() {
  return (
    <div className="flex justify-center items-center pt-5 bg-heroBg bg-cover bg-center bg-no-repeat h-screen">
      <SignIn />
    </div>
  );
}
