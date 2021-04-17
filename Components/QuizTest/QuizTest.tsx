import React, { createContext, useState } from "react";

import useStartTest from "./useStartTest";
import { Box, CircularProgress, withStyles } from "@material-ui/core";
import PageTitle from "../PageTitle/PageTitle";
import Timer, { getTimeRemainingInSeconds } from "./Timer/Timer";
import Questions from "../Questions/Questions";
import useLocalState from "../../custom-hooks/useLocalState";
import IQuestion from "../../Models/IQuestion";
import Submit from "./Submit/Submit";

interface IProps {
  id: number;
  status: "retake" | "ongoing" | "new_test" | "unknown";
}

export const QuizIDContext = createContext(null);
export const AnswersContext = createContext(null);

const QuizTest: React.FC<IProps> = ({ id, status }) => {
  const { test, isLoading, isError } = useStartTest(id, status);

  const [user] = useLocalState("user", "");
  const [answers, setAnswersState] = useLocalState(
    `${user.email}-quiz${id}-answers`,
    {}
  );

  const [secondsRemaining, setSecondsRemaining] = useState<number>(() => {
    if (!test) return 600;

    return getTimeRemainingInSeconds(
      test?.created_at,
      test?.quiz?.duration.toString()
    );
  });

  if (isError) return <p>Sorry some error occured. Please refresh the page.</p>;

  const setAnswers = (optionID: number, question: IQuestion) => {
    setAnswersState((state: any) => {
      let tempAnswers = { ...state };

      if (question.answer_type === "multiple_choice") {
        const options = tempAnswers[`${question.id}`];

        if (options && options.includes(optionID)) {
          tempAnswers = { ...state, [`${question.id}`]: [] };
        } else {
          tempAnswers = { ...state, [`${question.id}`]: [optionID] };
        }
      } else if (question.answer_type === "checkboxes") {
        const options = tempAnswers[`${question.id}`];

        if (options && options.includes(optionID)) {
          tempAnswers = {
            ...state,
            [`${question.id}`]: options.filter(
              (option: number) => option != optionID
            ),
          };
        } else if (options && !options.includes(optionID)) {
          tempAnswers = {
            ...state,
            [`${question.id}`]: [...options, optionID],
          };
        } else {
          tempAnswers = {
            ...state,
            [`${question.id}`]: [optionID],
          };
        }
      }

      return { ...tempAnswers };
    });
  };

  return (
    <Container>
      <PageTitle title={isLoading ? "Starting Test..." : test.quiz.title}>
        {isLoading && <CircularProgress />}
      </PageTitle>
      {test && !isLoading && (
        <Timer
          start_time={test.created_at}
          duration={test?.quiz?.duration}
          secondsRemaining={secondsRemaining}
          setSecondsRemaining={setSecondsRemaining}
        />
      )}
      {test && !isLoading && test?.quiz.test_questions && (
        <AnswersContext.Provider
          value={{
            answers,
            setAnswers,
          }}
        >
          <QuizIDContext.Provider value={{ quizID: id }}>
            <Questions questions={test.quiz.test_questions} />
          </QuizIDContext.Provider>
        </AnswersContext.Provider>
      )}
      <Submit
        answers={answers}
        test_id={test.id}
        setAnswersState={setAnswersState}
        secondsRemaining={secondsRemaining}
      />
    </Container>
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
