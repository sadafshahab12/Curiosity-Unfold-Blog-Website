"use client";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { CommentType } from "../type/dataType";

export const BlogContext = createContext({});

export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [text, setText] = useState("");
  const fullName = "Sadaf Shahab";

  useEffect(() => {
    let currIndex = 0;
    let typingInterval: NodeJS.Timeout;
    let resetTimeout: NodeJS.Timeout;

    const typeText = () => {
      typingInterval = setInterval(() => {
        if (currIndex < fullName.length) {
          setText(fullName.slice(0, currIndex + 1));
          currIndex++;
        } else {
          clearInterval(typingInterval);
          resetTimeout = setTimeout(() => {
            setText("");
            currIndex = 0;
            typeText();
          }, 200);
        }
      }, 250);
    };
    typeText();

    return () => {
      clearInterval(typingInterval);
      clearTimeout(resetTimeout);
    };
  }, []);

  // comment
  const [userName, setUserName] = useState<string>("");
  const [userComment, setUserComment] = useState<string>("");
  const [commentByBlogId, setCommentsByBlogId] = useState<
    Record<string, CommentType[]>
  >({});

  useEffect(() => {
    const savedComments = localStorage.getItem("commentsByBlogId");
    if (savedComments) {
      setCommentsByBlogId(JSON.parse(savedComments));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("commentsByBlogId", JSON.stringify(commentByBlogId));
  }, [commentByBlogId]);

  const handleAddComment = (blogId: string) => {
    if (userName.trim() && userComment.trim()) {
      const now = new Date();
      const dayName = now.toLocaleDateString("en-US", { weekday: "short" });
      const sec = now.getSeconds().toString();
      const newComment: CommentType = {
        userName,
        userComment,
        day: dayName,
        seconds: sec,
      };
      setCommentsByBlogId((prev) => ({
        ...prev,
        [blogId]: [newComment, ...(prev[blogId] || [])],
      }));
      // setComments([newComment, ...comments]);
      setUserName("");
      setUserComment("");
    } else {
      alert("Please Fill out Both Fields");
    }
  };

  const handleEditComment = (
    blogId: string,
    index: number,
    newComment: string
  ) => {
    setCommentsByBlogId((prev) => {
      const updatedComments = [...(prev[blogId] || [])];
      if (updatedComments[index]) {
        updatedComments[index] = {
          ...updatedComments[index],
          userComment: newComment,
        };
        console.log("Updated Comment:", updatedComments[index]); // Debugging
      } else {
        console.error("Invalid index:", index);
      }
      return {
        ...prev,
        [blogId]: updatedComments,
      };
    });
  };

  const handleDeleteComment = (blogId: string, index: number) => {
    setCommentsByBlogId((prev) => {
      const updatedComments = [...(prev[blogId] || [])];
      updatedComments.splice(index, 1);
      return {
        ...prev,
        [blogId]: updatedComments,
      };
    });
  };
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const savedThemes = localStorage.getItem("theme") || "light";
    setTheme(savedThemes);
    document.documentElement.classList.toggle("dark", savedThemes === "dark");
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };
  return (
    <BlogContext.Provider
      value={{
        text,
        setUserName,
        setUserComment,
        handleAddComment,
        userName,
        userComment,
        commentByBlogId,
        theme,
        toggleTheme,
        handleDeleteComment,
        handleEditComment,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
