import { Box, Fade, withStyles } from "@material-ui/core";
import React, { createContext, useContext, useEffect, useState } from "react";
import IQuestion from "../../../../Models/IQuestion";
import { QuizTestStateContext } from "../Questions";

import Question from "./Question/Question";
import useSingleQuestion from "./useSingleQuestion";

interface IProps {
  index: number;
  question: IQuestion;
}

export const QuestionContext = createContext(null);

export default function SingleQuestion({ question, index }: IProps) {
  const { currentQuestionIndex } = useContext(QuizTestStateContext);
  const { isVisible, direction } = useSingleQuestion(
    index,
    currentQuestionIndex
  );

  return (
    <Fade in={isVisible} timeout={250}>
      {isVisible ? (
        <Container>
          <QuestionContext.Provider value={{ question }}>
            <Question />
          </QuestionContext.Provider>
        </Container>
      ) : (
        <div></div>
      )}
    </Fade>
  );
}

const Container = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "0.5rem 1rem",
    transition: "1s",
  },
})(Box);
