import React from "react";
import IPostSuggestion from "../../../Models/IPostSuggestion";

import Link from "next/link";
import { Divider, makeStyles, Typography, withStyles } from "@material-ui/core";

interface IProps {
  post: IPostSuggestion;
}

const useStyles = makeStyles({
  container: {
    marginBottom: 5,
  },
});

const PostSuggestion: React.FC<IProps> = ({ post }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Link href={`/blog/posts/${post.slug}`}>
        <a style={{ textDecoration: "none", color: "inherit" }}>
          <LinkText>{post.title}</LinkText>
        </a>
      </Link>
      <PostDivider light />
    </div>
  );
};

export default PostSuggestion;

const LinkText = withStyles({
  root: {
    textTransform: "capitalize",
    marginBottom: 10,
    ["&:hover"]: {
      textDecoration: "underline",
    },
  },
})(Typography);

const PostDivider = withStyles({ root: { margin: 0 } })(Divider);
