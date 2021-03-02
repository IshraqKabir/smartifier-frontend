import { makeStyles } from "@material-ui/core";
import React from "react";
import IPost from "../../../Models/IPost";
import Post from "../SinglePost/SinglePost";

interface IProps {
  posts: IPost[];
  position: number;
}

const useStyles = makeStyles({
  container: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
});

const PostsList: React.FC<IProps> = ({ posts }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {posts.map((post, position) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default PostsList;
