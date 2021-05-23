import { Box, Typography, withStyles } from "@material-ui/core";
import { createContext } from "react";
import IQuestion from "../../../Models/IQuestion";
import SingleQuestion from "./SingleQuestion/SingleQuestion";
import QuestionBottomBar from "./QuestionBottomBar/QuestionBottomBar";
import useTestState from "./useTestState";
import QuestionsProgressBar from "./QuestionsProgressBar/QuestionsProgressBar";
import QuestionCountAndTimer from "./QuestionBottomBar/QuestionCountAndTimer/QuestionCountAndTimer";
import Submit from "../Submit/Submit";

interface IProps {
  quizTitle: String;
  questions: IQuestion[];
  isAssessment: boolean;
  quizId: number;
  test: any;
  duration: string;
}

export const QuizTestStateContext = createContext(null);

export default function Questions({
  quizTitle,
  questions,
  isAssessment,
  quizId,
  test,
  duration,
}: IProps) {
  const {
    answers,
    setAnswers,
    currentQuestionIndex,
    goToNextQuestion,
    goToPreviousQuestion,
    progress,
    showPrevious,
    showNext,
    timeRemaining,
    secondsRemaining,
    showSubmitButton,
    isSubmitting,
    handleSubmit,
  } = useTestState(quizId, questions, test, duration);

  return (
    <QuizTestStateContext.Provider
      value={{
        answers,
        setAnswers,
        currentQuestionIndex,
        goToNextQuestion,
        goToPreviousQuestion,
        showPrevious,
        showNext,
        questionCount: questions?.length,
        timeRemaining,
        secondsRemaining,
        isSubmitting,
        handleSubmit,
      }}
    >
      <OuterContainer>
        <QuestionsContainer>
          <Header>
            <Typography variant="h6" color="inherit">
              {`${quizTitle} ${isAssessment ? "assessment" : "quiz"}`}
            </Typography>
          </Header>
          {questions &&
            questions?.map((question, index) => {
              return (
                <SingleQuestion
                  key={question?.id}
                  index={index}
                  question={question}
                />
              );
            })}
          <QuestionsProgressBar progress={progress} />
          <QuestionBottomBar />
        </QuestionsContainer>
        {showSubmitButton && <Submit />}
      </OuterContainer>
    </QuizTestStateContext.Provider>
  );
}

const QuestionsContainer = withStyles({
  root: {
    backgroundColor: "inherit",
    width: "100%",
    borderRadius: 5,
    overflow: "hidden",
    boxShadow: "0px 0px 8px 0px #2b579a",
    display: "flex",
    flexDirection: "column",
  },
})(Box);

const OuterContainer = withStyles({
  root: {
    width: "min(97%, 700px)",
    display: "flex",
    flexDirection: "column",
  },
})(Box);

const Header = withStyles({
  root: {
    width: "100%",
    textAlign: "center",
    color: "white",
    padding: "0.5rem 0",
    background:
      "transparent linear-gradient(180deg, #003EAA 0%, #002461E0 100%) 0% 0% no-repeat padding-box",
    textTransform: "capitalize",
  },
})(Box);
