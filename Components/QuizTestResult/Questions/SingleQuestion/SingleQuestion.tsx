import { Avatar, Box, Typography, withStyles } from "@material-ui/core";
import React from "react";
import IQuestion from "../../../../Models/IQuestion";
import { backend_url } from "../../../../url";
import Options from "./Options/Options";

interface IProps {
  question: IQuestion;
  isAnsweredCorrectly: boolean;
}

export default function SingleQuestion({
  question,
  isAnsweredCorrectly,
}: IProps) {
  return (
    <Container>
      <QuestionContainer>
        {question?.question && (
          <QuestionTitle variant="subtitle1">
            {`Q. ${question?.question}`}
          </QuestionTitle>
        )}
        {question?.image?.image_link && (
          <Avatar
            src={`${backend_url}/storage/${question?.image?.image_link}`}
            variant="square"
            style={{ height: 200, width: 200, margin: "0.2rem auto" }}
          />
        )}
        {isAnsweredCorrectly && question?.options && (
          <Options options={question?.options} />
        )}
      </QuestionContainer>
    </Container>
  );
}

const Container = withStyles({
  root: {
    width: "98%",
    margin: "2rem 0",
    overflowY: "scroll",
    overflowX: "hidden",
    border: "1px solid #e6e6e4",
    borderRadius: "7px 7px 0px 0px",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
})(Box);

const QuestionTitle = withStyles({
  root: {
    fontWeight: 600,
    padding: "0 0.5rem",
  },
})(Typography);

const QuestionContainer = withStyles({
  root: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
  },
})(Box);
