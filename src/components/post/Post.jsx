import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../data/Data";

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
  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <div>
      <p>{blog.title}</p>
      <p>{blog.body}</p>
    </div>
  );
};

export default Post;
