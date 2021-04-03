import { Box, withStyles } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { CommentsContext, CommentsCountContext } from "../SinglePost";
import Comment from "./Comment/Comment";

interface IProps {}

const CommentsSection = () => {
  const { comments } = useContext(CommentsContext);
  const { commentsCount } = useContext(CommentsCountContext);

  return (
    <Container>
      <Heading>Comments({commentsCount})</Heading>
      {comments &&
        comments.map((comment) => {
          return <Comment comment={comment} />;
        })}
    </Container>
  );
};

export default CommentsSection;

const Heading = withStyles({
  root: {
    color: "grey",
    fontWeight: 700,
  },
})(Box);

const Container = withStyles({
  root: {
    margin: "2rem 0rem",
  },
})(Box);
