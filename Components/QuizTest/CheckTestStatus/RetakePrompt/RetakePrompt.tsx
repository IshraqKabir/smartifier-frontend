import { Avatar, Box, withStyles } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import IQuiz from "../../../../Models/IQuiz";
import RetakeDialogue from "./RetakeDialogue/RetakeDialogue";

interface IProps {
  quizID: number;
  percentage: number;
  quiz: IQuiz;
  setShowTest: () => {};
}

const RetakePrompt = ({ quizID, percentage, quiz, setShowTest }) => {
  const [promptOpen, setPromptOpen] = useState<boolean>(false);

  const handleClickRetake = () => {
    setPromptOpen(true);
  };

  const handleClose = () => {
    setPromptOpen(false);
  };

  const handleSubmit = () => {
    setShowTest(true);
    handleClose();
  };

  return (
    <Container>
      <ImageContainer>
        <Avatar
          alt={`${quiz.title}`}
          src={`${quiz.image_link}`}
          style={{ height: "90px", width: "90px" }}
        />
      </ImageContainer>
      <TitleAndScoreContainer>
        <Title>{`You have already attempted "${
          quiz.title
        }" and attained ${percentage.toFixed(2)}% marks.`}</Title>
        {quiz.retake && (
          <Button onClick={handleClickRetake}>Retake Test</Button>
        )}
      </TitleAndScoreContainer>
      <RetakeDialogue
        open={promptOpen}
        onClose={handleClose}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
};

export default RetakePrompt;

const Container = withStyles({
  root: {
    width: "70%",
    padding: "2rem 1rem",
    display: "flex",
    alignItems: "center",
    color: "white",
    marginTop: "2rem",
    borderRadius: 5,
    minHeight: 100,
    background:
      "transparent linear-gradient(180deg, #966BC2 0%, #437BBE6E 100%) 0% 0% no-repeat padding-box",
  },
})(Box);

const ImageContainer = withStyles({
  root: {
    margin: "0rem 1rem 0rem 3rem",
  },
})(Box);

const TitleAndScoreContainer = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
})(Box);

const Title = withStyles({
  root: {
    fontWeight: 700,
    fontSize: "1.2rem",
  },
})(Box);

const Button = withStyles({
  root: {
    maxWidth: 400,
    marginTop: 20,
    cursor: "pointer",
    width: "100%",
    padding: "10px 0px",
    borderRadius: 10,
    textAlign: "center",
    background:
      "transparent linear-gradient(180deg, #995FD4 0%, #1F29356E 100%) 0% 0% no-repeat padding-box",
  },
})(Box);
