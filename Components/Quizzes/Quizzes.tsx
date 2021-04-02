import React, { useState } from "react";
import { Box, Snackbar, withStyles } from "@material-ui/core";
import IQuiz from "../../Models/IQuiz";
import PageTitle from "../PageTitle/PageTitle";
import Quiz from "./Quiz/Quiz";
import Topbar from "../Layout/Topbar/Topbar";

interface IProps {
  quizzes: IQuiz[];
}

const Quizzes: React.FC<IProps> = ({ quizzes }) => {
  return (
    <Container>
      <Topbar />
      <PageTitle title="Quizzes" />
      <QuizzesContainer>
        {quizzes.map((quiz) => {
          return <Quiz key={quiz.id} quiz={quiz} />;
        })}
      </QuizzesContainer>
    </Container>
  );
};

export default Quizzes;

const Container = withStyles({
  root: {
    width: "100%",
    minHeight: "100vh",
    // backgroundColor: "#5D00A5",
    background:
      "transparent linear-gradient(180deg, #000266 0%, #032C73 57%, #00163B 100%, #003A67 100%) 0% 0% no-repeat padding-box",
  },
})(Box);

const QuizzesContainer = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    paddingBottom: 200,
  },
})(Box);
