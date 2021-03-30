import { Box, withStyles } from "@material-ui/core";
import React from "react";
import PageTitle from "../../PageTitle/PageTitle";

interface IProps {}

const Details: React.FC<IProps> = () => {
  return (
    <Container>
      <PageTitle title="" />
    </Container>
  );
};

export default Details;

const Container = withStyles({
  root: {
    color: "white",
  },
})(Box);
