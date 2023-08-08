import React from "react";
import styles from "./PostList.module.scss";
import { useEffect, useState } from "react";
import { getPosts } from "../../data/Data";
import { Link } from "react-router-dom";

const PostList = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const fetchBlogs = async () => {
    setLoading(true);

    const res = await getPosts();

    setPosts([...res]);
    setLoading(false);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <div className={styles.post__container}>
        {posts.map((post) => (
          <div key={post.id} className={styles.post}>
            <Link to={`/blog/${post.id}`} className={styles.post__link}>
              <p className={styles.post__date}>
                {post.dateAdded.toDate().toLocaleDateString("en-UK")}{" "}
              </p>
              <h3 className={styles.post__title}>{post.title} </h3>
              <p className={styles.post__byline}>{post.byline}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostList;
