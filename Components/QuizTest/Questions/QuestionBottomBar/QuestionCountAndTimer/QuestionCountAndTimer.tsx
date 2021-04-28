import { Box, makeStyles, Typography, withStyles } from "@material-ui/core";
import { useContext } from "react";
import { QuizTestStateContext } from "../../Questions";

export default function QuestionCountAndTimer() {
  const {
    questionCount,
    currentQuestionIndex,
    timeRemaining,
    secondsRemaining,
  } = useContext(QuizTestStateContext);

  const classes = useStyles({ secondsRemaining });

  return (
    <Container>
      <QuestionCount variant="subtitle2">{`Q.${
        currentQuestionIndex + 1
      }/${questionCount}`}</QuestionCount>
      <TimeRemaining variant="subtitle2" className={classes.timeRemaining}>
        {timeRemaining}
      </TimeRemaining>
    </Container>
  );
}

const Container = withStyles({
  root: {
    float: "left",
    display: "flex",
    alignItems: "center",
  },
})(Box);

const QuestionCount = withStyles({
  root: {
    marginRight: "1rem",
    fontWeight: 600,
  },
})(Typography);

const TimeRemaining = withStyles({
  root: {
    fontWeight: 600,
  },
})(Typography);

const useStyles = makeStyles({
  timeRemaining: {
    color: ({ secondsRemaining }: { secondsRemaining: number }) => {
      return secondsRemaining > 60 ? "black" : "red";
    },
  },
});
