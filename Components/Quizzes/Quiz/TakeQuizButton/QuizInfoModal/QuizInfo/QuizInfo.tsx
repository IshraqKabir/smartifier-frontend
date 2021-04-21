import { Box, CircularProgress, withStyles } from "@material-ui/core";
import useQuizInfo from "./useQuizInfo";

interface IProps {
  quizId: number;
}

export default function QuizInfo({ quizId }: IProps) {
  const { isLoading } = useQuizInfo(quizId);

  return (
    <Container>
      {isLoading && (
        <LoadingContainer>
          <CircularProgress color="primary" />
        </LoadingContainer>
      )}
    </Container>
  );
}

const Container = withStyles({
  root: {
    padding: "1rem",
  },
})(Box);

const LoadingContainer = withStyles({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
})(Box);
