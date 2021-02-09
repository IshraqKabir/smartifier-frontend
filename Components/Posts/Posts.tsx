import { makeStyles } from "@material-ui/core";
import React from "react";
import IPost from "../../Models/IPost";
import IPostSuggestion from "../../Models/IPostSuggestion";
import ITopic from "../../Models/ITopic";
import Topbar from "../Layout/Topbar/Topbar";
import PostsList from "./PostsList/PostsList";
import Search from "../Search/Search";
import Sidebar from "../Sidebar/Sidebar";
import Topics from "../Topics/Topics";

import Head from "next/head";
import PageTitle from "../PageTitle/PageTitle";

const useStyles = makeStyles({
  pageContainer: {
    width: "100vw",
    backgroundColor: "white",
    overflowX: "hidden",
  },
  mainContainer: {
    width: "100%",
    paddingTop: 40,
    paddingLeft: "5%",
    paddingRight: "5%",
    height: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  },
  postsAndSidebarContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
  },
});

interface IProps {
  posts: IPost[];
  topPosts: IPostSuggestion[];
  topics: ITopic[];
}

const Posts: React.FC<IProps> = ({ posts, topics, topPosts }) => {
  const classes = useStyles();

  return (
    <div className={classes.pageContainer}>
      <div>
        <Head>
          <title>Smartifer Blog</title>
        </Head>
      </div>
      <Topbar />
      <PageTitle title="Smartifier Blog" />
      <div className={classes.mainContainer}>
        <Topics topics={topics} />
        <Search />
        <div className={classes.postsAndSidebarContainer}>
          <PostsList posts={posts} />
          <Sidebar topPosts={topPosts} />
        </div>
      </div>
    </div>
  );
};

export default Posts;
