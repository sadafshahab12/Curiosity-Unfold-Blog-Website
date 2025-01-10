import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center pt-8 bg-heroBg bg-cover bg-center bg-no-repeat h-screen px-10 ">
      <SignUp />
     
    </div>
  );
}
