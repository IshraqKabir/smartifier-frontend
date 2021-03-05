import React, { createContext } from "react";

import Question from "../Question/Question";
import IQuestion from "../../Models/IQuestion";
import { Box, withStyles } from "@material-ui/core";

interface IProps {
  questions: IQuestion[];
}

export const QuestionContext = createContext(null);

const Questions: React.FC<IProps> = ({ questions }) => {
  return (
    <Container>
      {questions &&
        questions.map((question, index) => {
          return (
            <QuestionContext.Provider
              value={{
                questionID: question.id,
                answerType: question.answer_type,
                question: question
              }}
              key={question.id}
            >
              <Question question={question} position={index + 1} />
            </QuestionContext.Provider>
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
    padding: "2rem 4rem 0.5rem 4rem",
    ["@media (max-width: 1000px)"]: {
      padding: "2rem 2rem",
    },
    ["@media (max-width: 800px)"]: {
      padding: "2rem 1rem",
    },
  },
})(Box);
