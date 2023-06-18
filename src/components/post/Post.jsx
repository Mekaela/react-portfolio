import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../data/Data";
import styles from "./Post.module.scss";
import ReactMarkdown from "react-markdown";
import reactDom from "react-dom";

const Post = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const fetchBlog = async () => {
    setLoading(true);
    const res = await getPost(id);
    setBlog(res);
    setLoading(false);
  };
//   also need to get markdown file, which is the blog.postUrl
  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <div className={styles.post}>
      <h3 className={styles.post__title}>{blog.title}</h3>
      <p className={styles.post__author}>By {blog.author}</p>
      {/* <p className={styles.post__date}>{blog.dateAdded.toDate().toLocaleDateString("en-UK")}</p> */}
      {/* <ReactMarkdown source={blog.postUrl} /> */}
      <p className={styles.post__body}>{blog.body}</p>
    </div>
  );
};

export default Post;
