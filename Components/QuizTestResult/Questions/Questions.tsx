import { Box, Typography, withStyles } from "@material-ui/core";
import IQuestion from "../../../Models/IQuestion";

import SingleQuestion from "./SingleQuestion/SingleQuestion";

interface IProps {
  questions: any;
  isAnsweredCorrectly: boolean;
}

export default function CorrectAnswers({
  questions,
  isAnsweredCorrectly,
}: IProps) {
  return (
    <Container>
      <Title variant="h5">{`${
        isAnsweredCorrectly ? "Correct" : "Wrong"
      } Answers`}</Title>
      <Divider />
      {questions?.map((question: IQuestion) => {
        return (
          <SingleQuestion
            key={question?.id}
            question={question}
            isAnsweredCorrectly={isAnsweredCorrectly}
          />
        );
      })}
    </Container>
  );
}

const Container = withStyles({
  root: {
    width: "100%",
    border: "1px solid #e6e6e4",
    borderRadius: "7px 7px 0px 0px",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "2rem 0",
  },
})(Box);

const Title = withStyles({
  root: {
    padding: "0.7rem",
    textTransform: "capitalize",
  },
})(Typography);

const Divider = withStyles({
  root: {
    width: "100%",
    height: 2,
    backgroundColor: "#e6e6e4",
  },
})(Box);
