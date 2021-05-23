import { makeStyles } from "@material-ui/core";
import React from "react";
import IPost from "../../Models/IPost";
import ITopic from "../../Models/ITopic";
import Topbar from "../Layout/Topbar/Topbar";
import Intro from "./Intro/Intro";
import Search from "../Search/Search";
import Sidebar from "../Sidebar/Sidebar";
import Topics from "../Topics/Topics";
import SinglePost from "./SinglePost/SinglePost";
import IPostSuggestion from "../../Models/IPostSuggestion";
import Head from "next/head";
import url from "../../url";

const useStyles = makeStyles({
  pageContainer: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "white",
    overflowX: "hidden",
  },
  mainContainer: {
    width: "100%",
    paddingTop: 40,
    paddingLeft: "5%",
    paddingRight: "5%",
    height: "100vh",
  },
  postsAndSidebarContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
  },
});

interface IProps {
  post: IPost;
  topics: ITopic[];
  topPosts: IPostSuggestion[];
}

const Posts: React.FC<IProps> = ({ post, topics, topPosts }) => {
  const classes = useStyles();

  return (
    <div className={classes.pageContainer}>
      <div>
        <Head>
          <title>Smartifer Blog</title>
          <meta
            property="og:url"
            content={`https://smartifier.org/blog/posts/${post.slug}`}
          />
          <meta property="og:type" content="article" />
          {post.title && <meta property="og:title" content={`${post.title}`} />}
          {post.summary && (
            <meta property="og:description" content={`${post.summary}`} />
          )}
          {post.featured_image && (
            <meta
              property="og:image"
              content={`https://admin.smartifier.org${post.featured_image}`}
            />
          )}
        </Head>
      </div>
      <Topbar />
      <Intro />
      <div className={classes.mainContainer}>
        <Topics topics={topics} />
        <Search />
        <div className={classes.postsAndSidebarContainer}>
          <SinglePost post={post} />
          <Sidebar topPosts={topPosts} />
        </div>
      </div>
    </div>
  );
};

export default Posts;
