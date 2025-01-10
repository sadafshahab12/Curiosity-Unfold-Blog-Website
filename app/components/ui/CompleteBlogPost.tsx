import { CornerUpRight, Heart } from "lucide-react";
import Image from "next/image";
import { Category } from "@/app/type/dataType";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import * as React from "react";
import moment from "moment";


import Link from "next/link";

const getData = async () => {
  const fetchData = await client.fetch(groq`*[_type == "category"]`);
  return fetchData;
};
const CompleteBlogPost = async () => {
  const data = await getData();
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xs:gap-10 gap-6">
        {data.map((category: Category, index: number) => {
          const releaseDate = moment(category.releaseDate).format("dddd");
          const launchDate = moment(category.launchedAt).fromNow();
          return (
            <Link href={`/blog/${category.slug.current}`} key={index}>
              <div
                className="shadow-boxShadow relative xs:mt-24 xxs:mt-20 mt-16 bg-cardBg bg-cover bg-center bg-no-repeat  rounded-xl xs:py-5 py-3 "
                key={index}
              >
                <div className="image w-full xxs:px-8 px-4  md:h-[13rem] xs:h-[18rem] xxs:h-[13rem] h-[10rem] rounded-xl absolute xs:-top-16 -top-12 left-0 hover:scale-105 transition-all ease-in duration-300  ">
                  <Image
                    src={urlFor(category.categoryImage).url()}
                    alt={category.slug.current}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-xl shadow-imgShadow"
                  />
                </div>

                <div className="md:mt-[10rem] xs:mt-[14rem] xxs:mt-[10rem] mt-[7rem] xxs:px-8 px-4 xs:space-y-4 space-y-3">
                  <h3 className="text-[0.7rem] bg-purple-600 text-white py-1 px-3 rounded-2xl inline-block ">
                    {category.postCategory}
                  </h3>
                  <h1 className="xs:text-2xl xxs:text-xl text-[1rem] font-semibold text-slate-700">
                    {category.heading}
                  </h1>
                  <p className="xs:text-sm xxs:text-[0.8rem] text-[0.7rem]  text-slate-700">
                    {category.description}
                  </p>
                  <div className="author flex xs:flex-row flex-col justify-between gap-4 ">
                    <div className="flex items-center gap-2">
                      <div className="xxs:w-[3rem] w-[2.5rem] xxs:h-[3rem] h-[2.5rem] rounded-[5rem] shadow-lg">
                        <Image
                          src={urlFor(category.authorImage).url()}
                          alt="author-img"
                          width={500}
                          height={500}
                          className="w-full h-full rounded-[5rem] object-cover"
                        />
                      </div>

                      <h3 className="text-[0.7rem] text-white font-medium bg-purple-700 py-1 px-2 rounded-md ">
                        {category.authorName}
                      </h3>
                    </div>
                    <div className="flex xs:justify-start justify-between items-center gap-3">
                      <div className="border border-slate-700 p-1 rounded-md cursor-pointer">
                        <Heart className="xxs:w-4 w-3 xxs:h-4 h-3 " />
                      </div>
                      <div className="border border-slate-700 p-1 rounded-md cursor-pointer">
                        <CornerUpRight className="xxs:w-4 w-3 xxs:h-4 h-3" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between xxs:text-sm text-[0.7rem] text-gray-500">
                    <p className="">{releaseDate}</p>
                    <p className="time">{launchDate}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CompleteBlogPost;
