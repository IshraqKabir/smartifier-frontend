import { Box, Snackbar, withStyles } from "@material-ui/core";
import { useRouter } from "next/router";
import React, { useState } from "react";
import useLocalState from "../../../../custom-hooks/useLocalState";
import useLoginAlert from "../../../../custom-hooks/useLoginAlert";
import IQuiz from "../../../../Models/IQuiz";
import QuizInfoModal from "./QuizInfoModal/QuizInfoModal";
import useTakeQuizButton from "./useTakeQuizButton";

interface IProps {
  quiz: IQuiz;
}

const TakeQuizButton: React.FC<IProps> = ({ quiz }) => {
  const { showLoginAlert, close, handleClickWhenLoggedOut } = useLoginAlert();

  const { isModalOpen, openModal, closeModal } = useTakeQuizButton();

  const [user] = useLocalState("user", "");

  const handleClick = () => {
    if (!user) {
      handleClickWhenLoggedOut();
      return;
    }

    openModal();
  };

  return (
    <div>
      <Button onClick={() => handleClick()}>Take the Quiz</Button>
      <LoginAlert
        key={quiz.id}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={showLoginAlert}
        onClose={close}
        message="Please Login To Take The Quiz."
      />
      <QuizInfoModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        quizTitle={quiz?.title}
        quizId={quiz?.id}
      />
    </div>
  );
};

export default TakeQuizButton;

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

const LoginAlert = withStyles({
  root: {
    zIndex: 20000,
  },
})(Snackbar);
