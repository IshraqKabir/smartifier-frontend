import { Box, withStyles } from "@material-ui/core";
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
  let style = null;
  switch (question.style) {
    case 1:
      style = <Style1 question={question} position={position} />;
      break;
    case 2:
      style = <Style2 question={question} position={position} />;
      break;
    case 3:
      style = <Style3 question={question} position={position} />;
      break;
    default:
      style = <Style1 question={question} position={position} />;
      break;
  }

  return <Container>{style}</Container>;
};

export default Question;

const Container = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "2rem 5rem",
    background:
      "transparent linear-gradient(180deg, #966BC2 0%, #437BBE6E 100%) 0% 0% no-repeat padding-box",
    borderRadius: 20,
    minHeight: 150,
    marginBottom: "2rem",
    width: "80%",
    ["@media (max-width: 1000px)"]: {
      width: "90%",
      padding: "2rem 3rem",
    },
    ["@media (max-width: 800px)"]: {
      width: "100%",
      padding: "2rem 1rem",
    },
  },
})(Box);
