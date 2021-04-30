import { Box, TextField, withStyles } from "@material-ui/core";
import React, { useContext } from "react";
import { QuestionContext } from "../../../SingleQuestion";
import { QuizTestStateContext } from "../../../../Questions";
import useTextAnswer from "./useTextAnswer";

interface IProps {}

export default function TextAnswer({}: IProps) {
  const { answers, setAnswers } = useContext(QuizTestStateContext);
  const { question } = useContext(QuestionContext);

  const { text, handleChange } = useTextAnswer(question, answers, setAnswers);

  return (
    <Container>
      <TextField
        id={`${question?.id}-value`}
        label="Answer"
        variant="outlined"
        value={text}
        onChange={handleChange}
        fullWidth={true}
      />
    </Container>
  );
}

const Container = withStyles({
  root: {
    width: "100%",
    paddingTop: "1rem",
  },
})(Box);
