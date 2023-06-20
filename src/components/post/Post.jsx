import React from "react";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getPost, getPostBody } from "../../data/Data";
import styles from "./Post.module.scss";
// import ReactMarkdown from "react-markdown";
// import reactDom from "react-dom";

const Post = () => {
//   const [blog, setBlog] = useState([]);
//   const [blogBody, setBlogBody] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const { id } = useParams();

//   const fetchBlog = async () => {
//     setLoading(true);
//     const res = await getPost(id);
//     setBlog(res);
//     setLoading(false);
//   };
// //   also need to get markdown file, which is the blog.postUrl
//   const fetchBlogBody = async () => {
//       const res = await getPostBody(blog.postUrl);
//       setBlogBody(res);
//       console.log('blogBody: ' + blogBody);
//   }
//   useEffect(() => {
//     fetchBlog();
//     fetchBlogBody();
//   }, []);

  return (
    <div className={styles.post}>
      {/* <h3 className={styles.post__title}>{blog.title}</h3>
      <p className={styles.post__author}>By {blog.author}</p> */}
      {/* <p className={styles.post__date}>{blog.dateAdded.toDate().toLocaleDateString("en-UK")}</p> */}
      {/* <p className={styles.post__body}>{blog.body}</p> */}
      <p>Coming soon ...</p>
    </div>
  );
};

export default Post;
