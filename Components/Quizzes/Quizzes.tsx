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
    width: "100vw",
    minHeight: "100vh",
    backgroundColor: "#5D00A5",
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
