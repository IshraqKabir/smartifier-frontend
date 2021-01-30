import classes from "*.module.css";
import { makeStyles } from "@material-ui/core";
import React from "react";
import IPost from "../../Models/IPost";
import IPostSuggestion from "../../Models/IPostSuggestion";
import ITopic from "../../Models/ITopic";
import Topbar from "../Layout/Topbar/Topbar";
import Intro from "./Intro/Intro";
import PostsList from "./PostsList/PostsList";
import Search from "../Search/Search";
import Sidebar from "../Sidebar/Sidebar";
import Topics from "../Topics/Topics";

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
    paddingInline: "5%",
    height: "100vh",
    marginLeft: "auto",
    marginRight: "auto",
  },
  postsAndSidebarContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBlock: 10,
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
      <Topbar />
      <Intro />
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
