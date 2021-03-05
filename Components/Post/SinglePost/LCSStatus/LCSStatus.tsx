import { Box, withStyles } from "@material-ui/core";
import React from "react";
import Comments from "./Comments/Comments";
import Likes from "./Likes/Likes";

interface IProps {}

const LCSStatus: React.FC<IProps> = () => {
  return (
    <Container>
      <Likes />
      <Comments />
    </Container>
  );
};

export default LCSStatus;

const Container = withStyles({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
})(Box);
