import { Box, withStyles } from "@material-ui/core";
import React from "react";

interface IProps {}

const Shares: React.FC<IProps> = () => {
  return <Container>yo</Container>
};

export default Shares;

const Container = withStyles({
  root: {
    display: "flex",
    alignItems: "center",
  },
})(Box);


