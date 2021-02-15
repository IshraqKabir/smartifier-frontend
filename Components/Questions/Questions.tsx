import React from "react";

import Question from "../Question/Question";
import IQuestion from "../../Models/IQuestion";
import { Box, withStyles } from "@material-ui/core";

interface IProps {
  questions: IQuestion[];
}

const Questions: React.FC<IProps> = ({ questions }) => {
  return (
    <Container>
      {questions &&
        questions.map((question, index) => {
          return (
            <Question
              key={question.id}
              question={question}
              position={index + 1}
            />
          );
        })}
    </Container>
  );
};

export default Questions;

const Container = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    padding: "2rem 4rem",
    ["@media (max-width: 1000px)"]: {
      padding: "2rem 2rem",
    },
    ["@media (max-width: 800px)"]: {
      padding: "2rem 1rem",
    },
  },
})(Box);
