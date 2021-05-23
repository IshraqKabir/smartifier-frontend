import { Box, withStyles } from "@material-ui/core";
import React from "react";
import PageTitle from "../PageTitle/PageTitle";
import QuizResults from "./QuizResults/QuizResults";
import UserInfo from "./UserInfo/UserInfo";

interface IProps {}

const Profile: React.FC<IProps> = () => {
  return (
    <Container>
      <PageTitle title="" />
      <InnerContainer>
        <UserInfo />
      </InnerContainer>
      {/* <QuizResults /> */}
    </Container>
  );
};

export default Profile;

const Container = withStyles({
  root: {
    width: "100%",
    // height: 3000,
    minHeight: "100vh",
    background:
      "transparent linear-gradient(180deg, #5D00A5 0%, #002461 100%) 0% 0% no-repeat padding-box",
    position: "relative",
  },
})(Box);

const InnerContainer = withStyles({
  root: {
    position: "absolute",
    top: 0,
    width: "100%",
    padding: "4rem 4rem",
    ["@media (max-width: 600px)"]: {
      padding: "0.5rem",
    },
  },
})(Box);
