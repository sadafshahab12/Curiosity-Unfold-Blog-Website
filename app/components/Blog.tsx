import React, { useMemo } from "react";
import { PortableText } from "@portabletext/react";
import { BlogType } from "../type/dataType";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import moment from "moment";
import { Calendar1, Clock, CornerUpLeft } from "lucide-react";
import Comment from "./Comment";
import Link from "next/link";
interface ImageValue {
  asset: {
    _type: "image";
    url: string;
  };
}

const Blog = ({ blogData }: { blogData: BlogType }) => {
  useMemo(() => {
    return blogData.blogContent
      .filter((block) => block._type === "image" && block.asset?.url)
      .map((block) => block.asset!.url);
  }, [blogData.blogContent]);
  return (
    <section className=" max-w-4xl mx-auto md:py-10 py-8 md:px-10 xxs:px-8 px-6">
      <Link href="/blog-post">
        <div className="flex items-center gap-3 group">
          <div className=" bg-gray-200 h-10 w-10 rounded-3xl cursor-pointer flex items-center justify-center my-3 group-hover:shadow-md transition-all ease-in duration-300 ">
            <CornerUpLeft className="w-5 h-5" />
          </div>
          <p className="text-sm text-gray-500 group-hover:bg-slate-700 group-hover:text-white py-1 px-2 rounded-lg transition-all ease-in duration-300">
            Go Back
          </p>
        </div>
      </Link>
      <div>
        <h3 className="mb-3 xs:text-[0.9rem] text-[0.8rem] bg-slate-700 text-white inline-block xs:py-2 py-1 md:px-8 xs:px-6 px-3 rounded-md tracking-widest">
          {blogData.postCategory}
        </h3>
        <h1 className="md:text-5xl sm:text-4xl xs:text-3xl xxs:text-2xl text-lg font-bold md:my-6 my-4 md:leading-[4rem] xs:leading-[3rem] leading-[2rem]">
          {blogData.heading}
        </h1>
      </div>
      <div className="flex justify-between items-center xs:flex-row flex-col gap-4 my-5 ">
        <div className=" flex items-center gap-4 ">
          <div className="w-[4rem] h-[4rem] rounded-[5rem] ">
            <Image
              src={urlFor(blogData.authorImage).url()}
              alt="author-img"
              width={500}
              height={500}
              className="w-full h-full rounded-[5rem] object-cover "
            />
          </div>
          <p className="text-white py-1 sm:px-4 px-2 rounded-md bg-purple-600 sm:text-[1rem] text-[0.8rem]">
            {blogData.authorName}
          </p>
        </div>
        <div className="text-gray-500 sm:text-sm text-[0.7rem] flex  sm:gap-10 gap-5 items-center">
          <div className="flex items-center gap-3">
            <Calendar1 className="w-5 h-5" />
            <p>{moment(blogData.launchedAt).format("MMM Do YYYY")}</p>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5" />
            <p>{moment(blogData.launchedAt).fromNow()}</p>
          </div>
        </div>
      </div>
      <div>
        <PortableText
          value={blogData.blogContent}
          components={{
            types: {
              image: ({ value }: { value: ImageValue }) => {
                const imageUrl = value?.asset?.url;
                if (imageUrl) {
                  return (
                    <div className="w-full sm:h-[30rem] xs:h-[25rem] xxs:h-[18rem] h-[14rem] rounded-xl">
                      <Image
                        src={urlFor(imageUrl).url()}
                        alt="blog-img"
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  );
                }
                return null; // Return nothing if no image URL is found
              },
            },

            block: {
              h1: ({ children }: { children?: React.ReactNode }) => (
                <h1 className="text-3xl font-bold text-slate-700">
                  {children}
                </h1>
              ),
              h2: ({ children }: { children?: React.ReactNode }) => (
                <h2 className="text-3xl font-semibold text-slate-700 pt-10 pb-8">
                  {children}
                </h2>
              ),
              h3: ({ children }: { children?: React.ReactNode }) => (
                <h3 className="xs:text-3xl xxs:text-2xl text-xl text-slate-700 font-semibold xs:pt-10 pt-6 xs:pb-8 pb-4">
                  {children}
                </h3>
              ),
              h4: ({ children }: { children?: React.ReactNode }) => (
                <h4 className="text-xl font-semibold pt-5 pb-3 text-slate-700">
                  {children}
                </h4>
              ),
              h5: ({ children }: { children?: React.ReactNode }) => (
                <h5 className="xs:text-xl text-sm font-semibold text-slate-700  text-center tracking-wider ">
                  {children}
                </h5>
              ),
              h6: ({ children }: { children?: React.ReactNode }) => (
                <h6 className="text-xl font-semibold text-slate-700 text-center tracking-wider ">
                  {children}
                </h6>
              ),
              normal: ({ children }: { children?: React.ReactNode }) => (
                <p className="xs:text-[1rem] text-[0.8rem] text-gray-500 xs:leading-7 leading-6 py-4 text-justify">
                  {children}
                </p>
              ),
            },
            list: {
              bullet: ({ children }: { children?: React.ReactNode }) => (
                <ul className="list-disc ml-5 my-3 xs:text-[1rem] text-[0.8rem] xs:leading-7 leading-6 text-justify">
                  {children}
                </ul>
              ),
              number: ({ children }: { children?: React.ReactNode }) => (
                <ol className="list-decimal ml-5 my-3 xs:text-[1rem] text-[0.8rem] xs:leading-7 leading-6 ">
                  {children}
                </ol>
              ),
            },
            listItem: {
              bullet: ({ children }: { children?: React.ReactNode }) => (
                <li className="my-5">{children}</li>
              ),
              number: ({ children }: { children?: React.ReactNode }) => (
                <li className="my-5">{children}</li>
              ),
            },
          }}
        />
      </div>
      <div>
        <Comment blogId={blogData._id} />
      </div>
    </section>
  );
};

export default Blog;
