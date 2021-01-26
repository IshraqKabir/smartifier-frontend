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
  post: IPost;
  topics: ITopic[];
  topPosts: IPostSuggestion[];
}

const Posts: React.FC<IProps> = ({ post, topics, topPosts }) => {
  const classes = useStyles();

  return (
    <div className={classes.pageContainer}>
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
