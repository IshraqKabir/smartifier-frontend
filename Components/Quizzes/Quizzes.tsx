import React, { useState } from "react";
import { Box, Snackbar, withStyles } from "@material-ui/core";
import IQuiz from "../../Models/IQuiz";
import Topbar from "../Layout/Topbar/Topbar";
import PageTitle from "../PageTitle/PageTitle";
import Quiz from "./Quiz/Quiz";

interface IProps {
  quizzes: IQuiz[];
}

const Quizzes: React.FC<IProps> = ({ quizzes }) => {
  const [showLoginAlert, setShowLoginAlert] = useState<boolean>(false);
  return (
    <Container>
      <Topbar />
      <PageTitle title="Quizzes" />
      <QuizzesContainer>
        {quizzes.map((quiz) => {
          return <Quiz key={quiz.id} quiz={quiz} setShowLoginAlert={setShowLoginAlert} />;
        })}
      </QuizzesContainer>
      <LoginAlert
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={showLoginAlert}
        onClose={() => setShowLoginAlert(false)}
        message="Please Login To Take The Quiz."
      />
    </Container>
  );
};

export default Quizzes;

const Container = withStyles({
  root: {
    width: "100vw",
    minHeight: "100vh",
    backgroundColor: "#5D00A5",
  },
})(Box);

const QuizzesContainer = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    paddingBottom: 200,
  },
})(Box);

const LoginAlert = withStyles({ root: { zIndex: 20000 } })(Snackbar);
