import { Box, withStyles } from "@material-ui/core";
import React from "react";

interface IProps {}

const Likes: React.FC<IProps> = () => {
  return <Container>yo</Container>
};

export default Likes;

const Container = withStyles({
  root: {
    display: "flex",
    alignItems: "center",
  },
})(Box);
