import React from "react";

const Loading = () => {
  return (
    <div className="max-w-4xl mx-auto md:py-20 py-8 md:px-10 xxs:px-8 px-6 space-y-3">
      <h1 className="bg-slate-200 p-5 rounded-lg"></h1>
      <p className="bg-slate-200 p-10 rounded-lg"></p>
      <div className="flex items-center gap-4">
        <div className="w-[4rem] h-[4rem] rounded-[5rem] bg-slate-200 "></div>
        <p className=" sm:p-4 p-2 rounded-md bg-slate-200 w-full "></p>
      </div>
      <div className="pt-10 space-y-4">
        <p className="p-2 bg-slate-200 rounded-lg w-full"></p>
        <p className="p-2 bg-slate-200 rounded-lg w-full"></p>
        <p className="p-2 bg-slate-200 rounded-lg w-full"></p>
        <p className="p-2 bg-slate-200 rounded-lg w-full"></p>
      </div>
      <div className="pt-5">
        {" "}
        <h1 className="bg-slate-200 p-5 rounded-lg "></h1>
      </div>
      <div className="pt-10 space-y-5">
        <p className="p-2 bg-slate-200 rounded-lg w-full"></p>
        <p className="p-2 bg-slate-200 rounded-lg w-full"></p>
        <p className="p-2 bg-slate-200 rounded-lg w-full"></p>
        <p className="p-2 bg-slate-200 rounded-lg w-full"></p>
      </div>
      <div className="w-full sm:h-[30rem] xs:h-[25rem] xxs:h-[18rem] h-[14rem] rounded-xl bg-slate-200"></div>
    </div>
  );
};

export default Loading;
