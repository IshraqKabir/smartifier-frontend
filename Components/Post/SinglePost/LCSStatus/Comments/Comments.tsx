import { Box, withStyles } from "@material-ui/core";
import React from "react";

interface IProps {}

const Comments: React.FC<IProps> = () => {
  return <Container>yo</Container>
};

export default Comments;

const Container = withStyles({
  root: {
    display: "flex",
    alignItems: "center",
  },
})(Box);


