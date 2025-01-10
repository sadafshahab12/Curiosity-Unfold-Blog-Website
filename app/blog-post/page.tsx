import React from "react";
import CompleteBlogPost from "../components/ui/CompleteBlogPost";
import BlogPostHero from "../components/ui/BlogPostHero";

const BlogPostPage = () => {
  return (
    <section>
      <div>
        <BlogPostHero />
      </div>
      <div className="lg:p-10 p-5">
        <CompleteBlogPost />
      </div>
    </section>
  );
};

export default BlogPostPage;
