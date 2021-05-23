import { Box, Typography, withStyles } from "@material-ui/core";
import { useContext } from "react";
import QuestionCountAndTimer from "./QuestionCountAndTimer/QuestionCountAndTimer";
import { QuizTestStateContext } from "../Questions";

interface IProps {}

export default function QuestionBottomBar({}: IProps) {
  const {
    goToNextQuestion,
    goToPreviousQuestion,
    showNext,
    showPrevious,
  } = useContext(QuizTestStateContext);
  return (
    <Container>
      {showNext && (
        <Button onClick={goToNextQuestion}>
          <ButtonText variant="caption" color="inherit">
            Next
          </ButtonText>
        </Button>
      )}
      {showPrevious && (
        <Button onClick={goToPreviousQuestion}>
          <ButtonText variant="caption" color="inherit">
            Prev
          </ButtonText>
        </Button>
      )}
      <QuestionCountAndTimer />
    </Container>
  );
}

const Container = withStyles({
  root: {
    backgroundColor: "#f0f2f5",
    padding: "0.5rem",
  },
})(Box);

const Button = withStyles({
  root: {
    float: "right",
    color: "white",
    backgroundColor: "#0e62cb",
    padding: "0.2rem",
    margin: "auto 0.2rem",
    borderRadius: 5,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#09448e",
    },
  },
})(Box);

const ButtonText = withStyles({
  root: {
    fontWeight: 600,
    textTransform: "capitalize",
  },
})(Typography);
