import React from "react";
import IQuestion from "../../Models/IQuestion";
import Style1 from "./Style1/Style1";
import Style2 from "./Style2/Style2";
import Style3 from "./Style3/Style3";

interface IProps {
  question: IQuestion;
  position: number;
}

const Question: React.FC<IProps> = ({ question, position }) => {
  console.log(question.style);
  switch (question.style) {
    case 1:
      return <Style1 question={question} />;
    case 2:
      return <Style2 question={question} />;
    case 3:
      return <Style3 question={question} />;
    default:
      return <Style1 question={question} />;
  }
};

export default Question;
