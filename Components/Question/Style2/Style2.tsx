import { Box, withStyles } from "@material-ui/core";
import React from "react";
import IQuestion from "../../../Models/IQuestion";
import Options from "./Options/Options";
import Title from "./Title/Title";

interface IProps {
  question: IQuestion;
  position: number;
}

const Style2: React.FC<IProps> = ({ question, position }) => {
  return (
    <Container>
      <Title
        title={question.question}
        image={question.image}
        position={position}
      />
      <Options options={question.options} />
    </Container>
  );
};

export default Style2;

const Container = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
})(Box);
