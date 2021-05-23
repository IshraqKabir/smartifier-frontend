import axios from "axios";
import { GetServerSideProps } from "next";
import React from "react";
import IPost from "../../../../Models/IPost";
import IPostSuggestion from "../../../../Models/IPostSuggestion";
import ITopic from "../../../../Models/ITopic";
import { local_backend_url } from "../../../../url";

import PostsComponent from "../../../../Components/Posts/Posts";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params;

  const postsRes: any = await axios.get(
    `${local_backend_url}/canvas-blog/api/tags/${slug}/posts`
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
    props: { posts, topics, topPosts },
  };
};

interface IProps {
  posts: IPost[];
  topics: ITopic[];
  topPosts: IPostSuggestion[];
}

const Posts: React.FC<IProps> = ({ posts, topics, topPosts }) => {
  return <PostsComponent posts={posts} topics={topics} topPosts={topPosts} />;
};

export default Posts;
