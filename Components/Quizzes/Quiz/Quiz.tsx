import React from "react";

import { Avatar, Box, Typography, withStyles } from "@material-ui/core";

import IQuiz from "../../../Models/IQuiz";

import url, { backend_url } from "../../../url";

import ShareOnFB from "../../ShareOnFB/ShareOnFB";
import TakeQuizButton from "./TakeQuizButton/TakeQuizButton";

interface IProps {
  quiz: IQuiz;
}

const Quiz: React.FC<IProps> = ({ quiz }) => {
  return (
    <Container>
      <Avatar
        src={`${backend_url}/storage/${quiz?.image?.image_link}`}
        alt={quiz.title}
        style={{ width: 90, height: 90 }}
      />
      <TitleButtonContainer>
        <Title variant="h6">{quiz.title}</Title>
        <TakeQuizButton quiz={quiz} />
      </TitleButtonContainer>
      <FBShareContainer>
        <ShareOnFB
          link={`${url}/share/fb/quizzes/${quiz.id}`}
          title="Share this on Facebook"
        />
      </FBShareContainer>
    </Container>
  );
};

export default Quiz;

const Container = withStyles({
  root: {
    width: "80%",
    position: "relative",
    background:
      "transparent linear-gradient(180deg, #966BC2 0%, #437BBE6E 100%) 0% 0% no-repeat padding-box",
    marginTop: 30,
    borderRadius: 15,
    padding: "40px 50px",
    ["@media (max-width: 600px)"]: {
      width: "95%",
      paddingLeft: 10,
      paddingRight: 10,
    },
    display: "flex",
  },
})(Box);

const TitleButtonContainer = withStyles({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginLeft: 50,
  },
})(Box);

const Title = withStyles({
  root: {},
})(Typography);

const FBShareContainer = withStyles({
  root: {
    position: "absolute",
    right: 30,
    bottom: 10,
  },
})(Box);
