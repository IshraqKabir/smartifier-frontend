import {
  Box,
  CircularProgress,
  Typography,
  withStyles,
} from "@material-ui/core";
import React from "react";
import TestInfo from "./TestInfo/TestInfo";
import useQuizTestResult from "./useQuizTestResult";

interface IProps {
  testId: number;
}

export default function QuizTestResult({ testId }: IProps) {
  const { isLoading, isAuthorized, test, quiz } = useQuizTestResult(testId);

  return (
    <Container>
      <InnerContainer>
        {isLoading && <CircularProgress />}

        {!isLoading && !isAuthorized && (
          <Typography variant="h6" color="error">
            Sorry, You Are Not Authorized To View This Test's Result
          </Typography>
        )}

        {!isLoading && isAuthorized && test && (
          <TestInfo test={test} quiz={quiz} />
        )}
      </InnerContainer>
    </Container>
  );
}

const Container = withStyles({
  root: {
    width: "100vw",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "3rem 0rem",
    backgroundColor: "#f3f2ee",
  },
})(Box);

const InnerContainer = withStyles({
  root: {
    width: "min(1000px, 98%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
})(Box);
