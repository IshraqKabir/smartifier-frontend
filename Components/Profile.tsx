import { Box, withStyles } from "@material-ui/core";
import React from "react";
import PageTitle from "./PageTitle/PageTitle";

interface IProps {}

const Profile: React.FC<IProps> = () => {
  return (
    <Container>
      <PageTitle title="" />
    </Container>
  );
};

export default Profile;

const Container = withStyles({
  root: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#5D00A5",
  },
})(Box);
