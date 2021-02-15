import React from "react";

import Question from "../Question/Question";
import IQuestion from "../../Models/IQuestion";

interface IProps {
  questions: IQuestion[];
}

const Questions: React.FC<IProps> = ({ questions }) => {
  return (
    <>
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
    </>
  );
};

export default Questions;
