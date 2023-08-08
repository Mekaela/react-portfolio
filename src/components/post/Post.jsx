import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost, getImage } from "../../data/Data";
import styles from "./Post.module.scss";
// import ReactMarkdown from "react-markdown";
// import reactDom from "react-dom";
import dompurify from "dompurify";

const Post = () => {
  const [blog, setBlog] = useState([]);
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const sanitizer = dompurify.sanitize;

  const fetchBlog = async () => {
    setLoading(true);
    const res = await getPost(id);
    setBlog(res);
    setLoading(false);
  };
  // // get image url
  const fetchImageUrl = async () => {
    const res = await getImage("DS_design.jpg");
    setImage(res);
  };
  useEffect(() => {
    fetchBlog();
    fetchImageUrl();
  }, []);

  return (
    <div className={styles.post}>
      <img
        className={styles.post__coverImg}
        src={image}
        alt={blog.coverImgUrl}
      />
      <h2 className={styles.post__title}>{blog.title}</h2>
      <p className={styles.post__author}>By {blog.author}</p>
      {/* <p className={styles.post__date}>{blog.dateAdded.toDate().toLocaleDateString("en-UK")}</p> */}
      <div
        className={styles.post__body}
        dangerouslySetInnerHTML={{ __html: sanitizer(blog.body) }}
      ></div>
    </div>
  );
};

export default Post;
