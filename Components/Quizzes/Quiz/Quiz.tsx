import React, { useState } from "react";

import {
  Avatar,
  Box,
  Snackbar,
  Typography,
  withStyles,
} from "@material-ui/core";

import { useRouter } from "next/router";

import useLocalState from "../../../custom-hooks/useLocalState";

import IQuiz from "../../../Models/IQuiz";

import url, { backend_url } from "../../../url";

import ShareOnFB from "../../ShareOnFB/ShareOnFB";

interface IProps {
  quiz: IQuiz;
}

const Quiz: React.FC<IProps> = ({ quiz }) => {
  const [showLoginAlert, setShowLoginAlert] = useState<boolean>(false);
  const [user] = useLocalState("user", "");

  const router = useRouter();

  const handleClick = () => {
    if (!user.token) {
      setShowLoginAlert(true);
      setTimeout(() => {
        setShowLoginAlert(false);
      }, 3000);
      return;
    }

    router.push(`/test/quiz/${quiz.id}`);
  };

  return (
    <Container>
      <Avatar
        src={`${backend_url}/storage/${quiz?.image?.image_link}`}
        alt={quiz.title}
        style={{ width: 90, height: 90 }}
      />
      <TitleButtonContainer>
        <Title variant="h6">{quiz.title}</Title>
        <Button onClick={() => handleClick()}>Take the Quiz</Button>
      </TitleButtonContainer>
      <FBShareContainer>
        <ShareOnFB
          link={`${url}/share/fb/quizzes/${quiz.id}`}
          title="Share this on Facebook"
        />
      </FBShareContainer>
      <LoginAlert
        key={quiz.id}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={showLoginAlert}
        onClose={() => setShowLoginAlert(false)}
        message="Please Login To Take The Quiz."
      />
    </Container>
  );
};

export default Quiz;

const Container = withStyles({
  root: {
    width: "80%",
    position: "relative",
    background:
      "transparent linear-gradient(180deg, #966BC2 0%, #437BBE6E 100%) 0% 0% no-repeat padding-box",
    marginTop: 30,
    borderRadius: 15,
    padding: "40px 50px",
    ["@media (max-width: 600px)"]: {
      width: "95%",
      paddingLeft: 10,
      paddingRight: 10,
    },
    display: "flex",
  },
})(Box);

const TitleButtonContainer = withStyles({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginLeft: 50,
  },
})(Box);

const Title = withStyles({
  root: {},
})(Typography);

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

const FBShareContainer = withStyles({
  root: {
    position: "absolute",
    right: 30,
    bottom: 10,
  },
})(Box);

const LoginAlert = withStyles({
  root: {
    zIndex: 20000,
  },
})(Snackbar);
