import { Avatar, Box, Typography, withStyles } from "@material-ui/core";
import React, { useContext } from "react";
import { backend_url } from "../../../../../url";
import { QuestionContext } from "../SingleQuestion";
import Options from "./Options/Options";

interface IProps {}

export default function Question({}: IProps) {
  const { question } = useContext(QuestionContext);

  return (
    <Container>
      <QuestionContainer>
        {question?.question && (
          <QuestionTitleContainer>
            {question?.answer_type == "checkboxes" && (
              <QuestionTitle variant="caption">
                *Multiple Answers Might Be Correct.
              </QuestionTitle>
            )}
            <QuestionTitle variant="subtitle1">
              {`Q. ${question?.question}`}
            </QuestionTitle>
          </QuestionTitleContainer>
        )}
        {question?.image?.image_link && (
          <Avatar
            src={`${backend_url}/storage/${question?.image?.image_link}`}
            variant="square"
            style={{ height: 200, width: 200, margin: "0.2rem 0" }}
          />
        )}
        {question?.options && <Options />}
      </QuestionContainer>
    </Container>
  );
}

const Container = withStyles({
  root: {
    width: "100%",
    height: "50vh",
    overflowY: "scroll",
    overflowX: "hidden",
  },
})(Box);

const QuestionTitle = withStyles({
  root: {
    fontWeight: 600,
    padding: "0 0.5rem",
  },
})(Typography);

const QuestionTitleContainer = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
})(Box);

const QuestionContainer = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
})(Box);
