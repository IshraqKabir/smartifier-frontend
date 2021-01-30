import { GetStaticProps } from "next";
import React from "react";
import axios from "axios";

import PostsComponent from "../../Components/Posts/Posts";

import { local_backend_url } from "../../url";
import IPost from "../../Models/IPost";
import ITopic from "../../Models/ITopic";
import IPostSuggestion from "../../Models/IPostSuggestion";

export const getStaticProps: GetStaticProps = async (context) => {
  const postsRes: any = await axios.get(
    local_backend_url + "/canvas-blog/api/posts"
  );
  const posts: IPost[] = [...postsRes.data.data];

  const topicsRes: any = await axios.get(
    `${local_backend_url}/canvas-blog/api/topics`
  );
  const topics: ITopic[] = [...topicsRes.data];

  const topPostsRes: any = await axios.get(
    `${local_backend_url}/canvas-blog/api/posts/top-by-views?post_count=10`
  );
  const topPosts: IPost[] = [...topPostsRes.data];

  return {
    props: {
      posts: posts,
      topics: topics,
      topPosts: topPosts,
    },
  };
};

interface IProps {
  posts: IPost[];
  topPosts: IPostSuggestion[];
  topics: ITopic[];
}

const Posts: React.FC<IProps> = ({ posts, topics, topPosts }) => {
  return <PostsComponent posts={posts} topics={topics} topPosts={topPosts} />;
};

export default Posts;
