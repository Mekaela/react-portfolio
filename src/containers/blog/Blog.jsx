import React from "react";
import BlogIntro from "../../components/blogIntro/BlogIntro";
import Footer from "../../components/footer/Footer";
import PostList from "../../components/postList/PostList";
import Navbar from "../../components/navbar/Navbar";
import styles from "./Blog.module.scss";

const Blog = () => {
  return (
    <div className={styles.blog}>
      <Navbar />
      <BlogIntro />
      <PostList />
      <Footer />
    </div>
  );
};

export default Blog;
