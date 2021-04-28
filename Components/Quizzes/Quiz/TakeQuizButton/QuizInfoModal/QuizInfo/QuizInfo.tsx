import { Box, CircularProgress, withStyles } from "@material-ui/core";
import BottomBar from "./BottomBar/BottomBar";
import useQuizInfo from "./useQuizInfo";

import QuizDetail from "./QuizDetail/QuizDetail";
import BeforeYouStart from "./BeforeYouStart/BeforeYouStart";
import UserDetail from "./UserDetail/UserDetail";

interface IProps {
  quizId: number;
}

export default function QuizInfo({ quizId }: IProps) {
  const { testStatus, quizInfo, userInfo, isLoading } = useQuizInfo(quizId);

  const showUserDetail: boolean =
    testStatus === "retake" || testStatus === "highest_attempt_count_reached";

  const quizOrAssessment: "quiz" | "assessment" = quizInfo?.is_assessment
    ? "assessment"
    : "quiz";

  return (
    <Container>
      {isLoading && (
        <LoadingContainer>
          <CircularProgress color="primary" />
        </LoadingContainer>
      )}
      <QuizDetail quizInfo={quizInfo} />

      {showUserDetail && (
        <UserDetail userInfo={userInfo} quizOrAssessment={quizOrAssessment} />
      )}
      <BeforeYouStart
        quizOrAssessment={quizOrAssessment}
        highestAttemptCount={quizInfo?.highest_attempt_count}
      />
      {!isLoading && (
        <BottomBar testStatus={testStatus} quizId={quizInfo?.id} />
      )}
    </Container>
  );
}

const Container = withStyles({
  root: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    paddingBottom: "5rem",
  },
})(Box);

const LoadingContainer = withStyles({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
})(Box);
