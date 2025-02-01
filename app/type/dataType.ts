export interface Category {
  _id: string;
  postCategory: string;
  heading: string;
  description: string;
  categoryImage: string;
  authorImage: string;
  authorName: string;
  releaseDate: string;
  launchedAt: string;
  slug: {
    current: string;
  };
}
export interface SlugType {
  slug?: string;
}
export interface BlogContent {
  _type: string;
  style: string;
  _key: string;
  children: Array<{ text: string }>;
  asset?: { url: string };
  listItem?: string;
  level?: number;
}
export interface BlogType {
  _id: string;
  slug: { current: string };
  blogContent: BlogContent[];
  postCategory: string;
  heading: string;
  authorImage: string;
  authorName: string;
  launchedAt: string;
}
export interface BlogContextType {
  text: string;
}
export interface CommentType {
  userName: string;
  userComment: string;
  day: string;
  seconds: string;
}
type Theme = "light" | "dark";
export interface BlogContextType {
  theme: Theme;
  toggleTheme: () => void;
  comments: CommentType[]; // Array of comments
  userName: string;
  handleDeleteComment: (blogId: string, index: number) => void; // Function to delete a comment
  handleEditComment: (
    blogId: string,
    index: number,
    newComment: string
  ) => void; // Function to edit a comment
  userComment: string;
  commentByBlogId: Record<string, CommentType[]>;
  handleAddComment: (blogId: string) => void; // Function to add a comment
  setUserName: (name: string) => void;
  setUserComment: (comment: string) => void;
}
