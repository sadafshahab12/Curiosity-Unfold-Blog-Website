"use client";
import Blog from "@/app/components/Blog";
import { BlogContent, BlogType, SlugType } from "@/app/type/dataType";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loading from "../Loading";

const BlogPage = () => {
  const { slug }: SlugType = useParams();
  const [blogContent, setBlogContent] = useState<
    (BlogType & BlogContent) | null
  >(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBlogData = async () => {
      if (slug) {
        const fetchData = await client.fetch(
          groq`*[_type == "category"]{_id, slug,postCategory,heading,authorImage,authorName,launchedAt,blogContent[]{...,asset->{url}} }`
        );
        // console.log(fetchData);
        const findBlog = fetchData.find(
          (blog: BlogType & BlogContent) => blog.slug.current == slug
        );
        if (findBlog) {
          setBlogContent(findBlog);
        } else {
          setBlogContent(null);
        }
        setLoading(false);
      }
    };
    fetchBlogData();
  }, [slug]);
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div>
      {blogContent ? (
        <Blog blogData={blogContent} />
      ) : (
        <div>
          <p>Profuct Not Found</p>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
