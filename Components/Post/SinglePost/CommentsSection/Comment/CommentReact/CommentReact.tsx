import { Box, withStyles } from "@material-ui/core";
import React from "react";
import Likes from "./Likes/Likes";
import Replies from "./Replies/Replies";

interface IProps {}

const CommentReact: React.FC<IProps> = () => {
  return (
    <Container>
      <Likes />
      {/* <Replies /> */}
    </Container>
  );
};

export default CommentReact;

const Container = withStyles({
  root: {
    borderBottom: "1px solid lightgrey",
    display: "flex",
    alignItems: "center",
    color: "grey",
  },
})(Box);
