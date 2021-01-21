import { GetStaticProps } from "next";
import React from "react";
import axios from "axios";

import PostsComponent from "../../Components/Posts/Posts";

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await axios.get("http://localhost:8000/canvas-blog/api/posts");

  return {
    props: {
      posts: posts.data.data,
    },
  };
};

const Posts = ({ posts }) => {
  return (
    <>
      <PostsComponent posts={posts} />
    </>
  );
};

export default Posts;
