import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import IPost from "../../../Models/IPost";
import Post from "./Post/Post";

interface IProps {
  posts: IPost[];
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

  if (posts.length == 0) {
    return (
      <Typography color="textSecondary" variant="h6">
        Sorry, no posts found :
      </Typography>
    );
  }

  return (
    <div className={classes.container}>
      {posts.map((post, position) => (
        <Post key={post.id} post={post} position={position} />
      ))}
    </div>
  );
};

export default PostsList;
