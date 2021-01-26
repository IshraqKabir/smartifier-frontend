import { GetServerSideProps, GetStaticPaths } from "next";
import IPost from "../../../Models/IPost";
import { local_backend_url } from "../../../url";

import ITopic from "../../../Models/ITopic";
import axios from "axios";

import PostComponent from "../../../Components/Post/Post";
import IPostSuggestion from "../../../Models/IPostSuggestion";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params;

  const postRes = await fetch(
    `${local_backend_url}/canvas-blog/api/posts/${slug}`
  );
  const post = await postRes.json();

  const topicsRes = await axios.get(
    `${local_backend_url}/canvas-blog/api/topics`
  );
  const topics: ITopic[] = [...topicsRes.data];

  const topPostsRes = await axios.get(
    `${local_backend_url}/canvas-blog/api/posts/top-by-views`
  );
  const topPosts = [...topPostsRes.data];

  return {
    props: { post, topics, topPosts },
  };
};

interface IProps {
  post: IPost;
  topics: ITopic[];
  topPosts: IPostSuggestion[];
}

const Post: React.FC<IProps> = ({ post, topics, topPosts }) => {
  return <PostComponent post={post} topics={topics} topPosts={topPosts} />;
};

export default Post;
