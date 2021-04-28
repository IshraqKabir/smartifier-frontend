import {
  Box,
  CircularProgress,
  Typography,
  withStyles,
} from "@material-ui/core";
import Questions from "./Questions/Questions";
import useQuizTest from "./useQuizTest";

interface IProps {
  quizId: number;
}

export default function QuizTest({ quizId }: IProps) {
  const { quiz, test, testStatus, isLoading } = useQuizTest(quizId);

  return (
    <Container>
      {isLoading && <CircularProgress />}
      {testStatus === "highest_attempt_count_reached" && (
        <Typography variant="h6" color="error">
          You have reached the highest attempt count.
        </Typography>
      )}
      {!isLoading && testStatus !== "highest_attempt_count_reached" && quiz && (
        <Questions
          questions={quiz?.questions}
          quizTitle={quiz?.title}
          isAssessment={quiz?.assessment !== null ? quiz.assessment : false}
          quizId={quiz?.id}
          duration={quiz?.duration}
          test={test}
        />
      )}
    </Container>
  );
}

const Container = withStyles({
  root: {
    display: "flex",
    width: "100vw",
    minHeight: "calc(100vh - 100px)",
    flexDirection: "column",
    alignItems: "center",
    padding: "5rem 0rem",
    backgroundColor: "#f0f2f5",
  },
})(Box);
