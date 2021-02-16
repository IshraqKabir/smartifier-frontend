import React, { createContext, useEffect, useState } from "react";

import useStartTest from "./useStartTest";
import { Box, CircularProgress, withStyles } from "@material-ui/core";
import PageTitle from "../PageTitle/PageTitle";
import Topbar from "../Layout/Topbar/Topbar";
import Timer from "./Timer/Timer";
import Questions from "../Questions/Questions";

interface IProps {
  id: number;
}

export const QuizIDContext = createContext(null);

const QuizTest: React.FC<IProps> = ({ id }) => {
  const { test, isLoading, isError } = useStartTest(id);

  if (isError) return <p>Sorry some error occured. Please refresh the page.</p>;

  return (
    <>
      <Topbar />
      <Container>
        <PageTitle title={isLoading ? "Starting Test..." : test.quiz.title}>
          {isLoading && <CircularProgress />}
        </PageTitle>
        {test && !isLoading && (
          <Timer start_time={test.created_at} duration={test?.quiz?.duration} />
        )}
        {test && !isLoading && test?.quiz.questions && (
          <QuizIDContext.Provider value={{ quizID: id }}>
            <Questions questions={test.quiz.questions} />
          </QuizIDContext.Provider>
        )}
      </Container>
    </>
  );
};

export default QuizTest;

const Container = withStyles({
  root: {
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#5D00A5",
    minHeight: "100vh",
    color: "white",
  },
})(Box);
