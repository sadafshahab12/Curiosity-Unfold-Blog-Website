import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useContext } from "react";
import Button from "./ui/Button";
import { BlogContext } from "../context/Context";
import { BlogContextType } from "../type/dataType";
import { Globe } from "lucide-react";

const Comment = ({ blogId }: { blogId: string }) => {
  const {
    handleAddComment,
    setUserComment,
    setUserName,
    userName,
    userComment,
    commentByBlogId,
    theme, // Get theme from context
  } = useContext(BlogContext) as BlogContextType;
  
  const commentbyid = commentByBlogId[blogId] || [];
  
  return (
    <div>
      <div
        className={`${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-commentBg text-black"
        } bg-no-repeat bg-center bg-cover border py-5 sm:px-10 px-5 rounded-lg shadow-lg sm:mt-10 mt-5`}
      >
        <h1
          className={`sm:text-3xl text-2xl font-semibold text-center ${
            theme === "dark" ? "text-purple-400" : "text-purple-700"
          } pb-5`}
        >
          Comment
        </h1>
        <div className="sm:space-y-8 space-y-6">
          <div className="space-y-3">
            <Label
              htmlFor="name"
              className={`sm:text-[1rem] text-[0.9rem] font-semibold ${
                theme === "dark" ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Your Name
            </Label>
            <Input
              placeholder="Example: Sadaf Shahab"
              className={`w-full block py-6 px-5 text-sm focus-visible:ring-1 focus-visible:ring-purple-700 focus-visible:outline-none border ${
                theme === "dark" ? "border-slate-300" : "border-slate-700"
              } focus:border-none transition-all ease-in duration-200`}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="space-y-3">
            <Label
              htmlFor="comment"
              className={`sm:text-[1rem] text-[0.9rem] font-semibold ${
                theme === "dark" ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Your Comment
            </Label>
            <Textarea
              placeholder="Write Your Comment..."
              className={`w-full block py-4 px-5 text-sm focus-visible:ring-1 focus-visible:ring-purple-700 focus-visible:outline-none border ${
                theme === "dark" ? "border-slate-300" : "border-slate-700"
              } focus:border-none transition-all ease-in duration-200`}
              value={userComment}
              onChange={(e) => setUserComment(e.target.value)}
            />
          </div>
          <div onClick={() => handleAddComment(blogId)}>
            <Button btnText="Add Comment" />
          </div>
        </div>
      </div>
      
      {/* Display comments */}
      <div>
        <h1
          className={`sm:px-10 px-5 sm:py-5 py-3 sm:text-xl text-lg font-semibold ${
            theme === "dark" ? "text-slate-300" : "text-slate-700"
          }`}
        >
          User Comments
        </h1>
        {commentbyid.length > 0 ? (
          commentbyid.map((usercomment, index: number) => {
            return (
              <div
                key={index}
                className={`flex justify-between xxs:flex-row flex-col xxs:items-center items-start border-b ${
                  theme === "dark" ? "border-slate-600" : "border-slate-300"
                }`}
              >
                <div
                  className={`flex items-center gap-5 py-5 sm:px-10 px-5 ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  <div
                    className={`${
                      theme === "dark"
                        ? "bg-purple-600 text-white"
                        : "bg-purple-300 text-purple-700"
                    } sm:w-14 xs:w-12 w-10 sm:h-14 xs:h-12 h-10 flex justify-center items-center sm:text-3xl xs:text-2xl text-xl rounded-[5rem] font-bold shadow-md`}
                  >
                    <p>{usercomment.userName.charAt(0).toUpperCase()}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-4">
                      <h2
                        className={`font-semibold ${
                          theme === "dark" ? "text-slate-300" : "text-slate-700"
                        } sm:text-lg text-[0.9rem]`}
                      >
                        {usercomment.userName.charAt(0).toUpperCase() +
                          usercomment.userName.slice(1).toLowerCase()}
                      </h2>
                      <Globe
                        className={`sm:w-5 w-4 sm:h-5 h-4 ${
                          theme === "dark" ? "text-slate-400" : "text-gray-400"
                        }`}
                      />
                    </div>

                    <p
                      className={`${
                        theme === "dark" ? "text-slate-300" : "text-gray-500"
                      } text-sm`}
                    >
                      {usercomment.userComment}
                    </p>
                  </div>
                </div>
                <div
                  className={`flex items-center gap-5 sm:px-10 px-5 ${
                    theme === "dark" ? "text-slate-300" : "text-gray-500"
                  }`}
                >
                  <p className="sm:text-sm text-[0.7rem]">{usercomment.day}</p>
                  <p
                    className={`text-[0.7rem] xxs:text-white ${
                      theme === "dark" ? "bg-purple-700" : "bg-transparent"
                    } xxs:bg-purple-700 py-1 px-2 rounded-md`}
                  >
                    {usercomment.seconds} sec{" "}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <p
            className={`py-5 text-center ${
              theme === "dark" ? "text-slate-300" : "text-slate-500"
            }`}
          >
            No Comments Yet..
          </p>
        )}
      </div>
    </div>
  );
};

export default Comment;
