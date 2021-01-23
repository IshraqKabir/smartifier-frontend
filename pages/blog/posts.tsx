import { GetStaticProps } from "next";
import React from "react";
import axios from "axios";

import PostsComponent from "../../Components/Posts/Posts";

import { local_backend_url } from "../../url";
import IPost from "../../Models/IPost";
import ITopic from "../../Models/ITopic";

export const getStaticProps: GetStaticProps = async (context) => {
  const postsRes = await axios.get(local_backend_url + "/canvas-blog/api/posts");
  const posts: IPost[]  = [...postsRes.data.data];
  
  const topicsRes = await axios.get(`${local_backend_url}/canvas-blog/api/topics`);
  const topics: ITopic[] = [...topicsRes.data];

  return {
    props: {
      posts: posts,
      topics: topics,
    },
  };
};

interface IProps {
  posts: IPost[],
  topics: ITopic[],
}

const Posts: React.FC<IProps> = ({ posts, topics }) => {
  return <PostsComponent posts={posts} topics={topics} />;
};

export default Posts;
