import {
  Avatar,
  Box,
  Divider,
  Typography,
  withStyles,
} from "@material-ui/core";
import {
  DoneAllOutlined,
  QueryBuilder,
  QuestionAnswerOutlined,
} from "@material-ui/icons";
import React from "react";
import { backend_url } from "../../../../../../../url";
import getFormattedTime from "../../../../../../../UtilFunctions/getFormattedTime";

export default function QuizDetail({ quizInfo }) {
  const times = getFormattedTime(quizInfo?.duration);
  const quizOrAssessment = quizInfo?.is_assessment ? "assessment" : "quiz";

  return (
    <div>
      <ImageContainer>
        <Avatar
          src={`${backend_url}/storage/${quizInfo?.image_link}`}
          variant="square"
          style={{ height: 100, width: 100 }}
        />
      </ImageContainer>
      <Title variant="h5">{quizInfo?.title?.toLowerCase()}</Title>
      <Description variant="subtitle1">
        {quizInfo?.description?.toLowerCase()}
      </Description>
      {quizInfo?.test_taker_count != null && (
        <TestTakerCount variant="subtitle2">
          <b>{quizInfo?.test_taker_count}</b>{" "}
          {quizInfo?.test_taker_count == 1 ? "person" : "people"}{" "}
          {quizInfo?.test_taker_count == 1 ? "has" : "have"} taken the{" "}
          {quizOrAssessment}
        </TestTakerCount>
      )}
      <QuizDetailContainer>
        <SingleQuizDetail>
          <QuestionAnswerOutlined />
          <QuizDetailText variant="subtitle1">
            <b>{quizInfo?.questions_count}</b> questions
          </QuizDetailText>
        </SingleQuizDetail>
        <SingleQuizDetail>
          <QueryBuilder />
          <QuizDetailText variant="subtitle1">
            <b>{`${
              times?.hours
                ? times?.hours > 1
                  ? times?.hours + " hours"
                  : times?.hours + " hour"
                : ""
            } ${
              times?.minutes
                ? times?.minutes > 1
                  ? times?.minutes + " minutes"
                  : times?.minutes + " minute"
                : ""
            } ${
              times?.seconds
                ? times?.seconds > 1
                  ? times?.seconds + " seconds"
                  : times?.seconds + " second"
                : ""
            }`}</b>{" "}
            to complete the {quizOrAssessment}
          </QuizDetailText>
        </SingleQuizDetail>
        <SingleQuizDetail>
          <DoneAllOutlined />
          <QuizDetailText variant="subtitle1">
            Score atleast <b>{quizInfo?.passing_percentage}%</b> to pass the{" "}
            {quizOrAssessment}
          </QuizDetailText>
        </SingleQuizDetail>
      </QuizDetailContainer>
      <Divider />
    </div>
  );
}

const Title = withStyles({
  root: {
    margin: "1rem 0 0 0",
    textTransform: "capitalize",
    fontWeight: 600,
  },
})(Typography);

const Description = withStyles({
  root: {
    margin: "0.2rem 0",
    textTransform: "capitalize",
  },
})(Typography);

const TestTakerCount = withStyles({
  root: {
    color: "gray",
  },
})(Typography);

const ImageContainer = withStyles({
  root: {},
})(Box);

const QuizDetailContainer = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: "1rem 0",
  },
})(Box);

const SingleQuizDetail = withStyles({
  root: {
    display: "flex",
    alignItems: "center",
  },
})(Box);

const QuizDetailText = withStyles({
  root: {
    margin: "0 0 0 0.5rem",
    whiteSpace: "nowrap",
  },
})(Typography);
