import { useEffect, useState } from "react";
import useLocalState from "../../../custom-hooks/useLocalState";
import IQuestion from "../../../Models/IQuestion";
import submitTest from "../../../repository/QuizTest/submitTest";

export default function useTestState(
  quizId: number,
  questions: IQuestion[],
  test: any,
  duration: string
) {
  const [user] = useLocalState("user", "");
  const [answers, setAnswersState] = useLocalState(
    `${user?.email}-test${test?.id}-answers`,
    {}
  );

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [progress, setProgress] = useState(getProgress());

  const [secondsRemaining, setSecondsRemaining] = useState<number>(() => {
    if (!test) return 600;

    return getTimeRemainingInSeconds(test?.created_at, duration.toString());
  });
  const [timeRemaining, setTimeRemaing] = useState<string>("");

  const [showSubmitButton, setShowSubmitButton] = useState<boolean>(false);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    setInterval(() => {
      setSecondsRemaining(
        getTimeRemainingInSeconds(test?.created_at, duration)
      );
    }, 500);
  }, []);

  useEffect(() => {
    if (secondsRemaining <= 0) {
      handleSubmit();
      setTimeRemaing("Test Finished");
    } else {
      setTimeRemaing(parseSecondsToClock(secondsRemaining));
    }
  }, [secondsRemaining]);

  useEffect(() => {
    setProgress(getProgress());
    if (currentQuestionIndex == questions?.length - 1) {
      setShowSubmitButton(true);
    } else {
      setShowSubmitButton(false);
    }
  }, [currentQuestionIndex]);

  const setAnswers = (optionId: number, question: IQuestion, text?: string) => {
    setAnswersState((state: any) => {
      let tempAnswers = { ...state };

      if (question.answer_type === "multiple_choice") {
        const options = tempAnswers[`${question?.id}`];

        if (!options || (Array.isArray(options) && !options[0])) {
          tempAnswers = {
            ...state,
            [`${question?.id}`]: [{ optionId: optionId }],
          };
        }

        if (options && Array.isArray(options) && options[0]) {
          if (options[0]?.optionId == optionId) {
            tempAnswers = { ...state, [`${question?.id}`]: [] };
          } else {
            tempAnswers = {
              ...state,
              [`${question?.id}`]: [{ optionId: optionId }],
            };
          }
        }
      } else if (question?.answer_type === "checkboxes") {
        const options = tempAnswers[`${question?.id}`];

        if (!options || (Array.isArray(options) && !options[0])) {
          tempAnswers = {
            ...state,
            [`${question?.id}`]: [{ optionId: optionId }],
          };
        }

        if (options && Array.isArray(options)) {
          let includes = false;

          options?.forEach((option) => {
            if (option?.optionId == optionId) {
              includes = true;
            }
          });

          if (includes) {
            tempAnswers = {
              ...state,
              [`${question?.id}`]: options?.filter((option) => {
                return option?.optionId != optionId;
              }),
            };
          } else {
            tempAnswers = {
              ...state,
              [`${question?.id}`]: [...options, { optionId: optionId }],
            };
          }
        }
      } else if (question?.answer_type === "short_paragraph") {
        if (!text) return { ...tempAnswers };
        tempAnswers = {
          ...state,
          [`${question?.id}`]: [
            {
              optionId: optionId,
              text: text,
            },
          ],
        };
      }

      return { ...tempAnswers };
    });
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex >= questions?.length - 1) return;
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex <= 0) return;
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const showPrevious: boolean = currentQuestionIndex != 0;
  const showNext: boolean = currentQuestionIndex < questions?.length - 1;

  function getProgress() {
    if (questions?.length == 0) return 100;

    return ((currentQuestionIndex + 1) * 100) / questions?.length;
  }

  async function handleSubmit() {
    if (!answers) alert("Not enough answers to submit!");
    setIsSubmitting(true);

    const processedAnswers = [];

    Object.values(answers)?.forEach((answer: any) => {
      if (answer && Array.isArray(answer)) {
        answer?.forEach((option) => {
          if (option?.optionId) {
            processedAnswers.push({
              optionId: option?.optionId,
              text: option?.text ? option?.text : "",
            });
          }
        });
      }
    });

    const response = await submitTest(test?.id, processedAnswers, user?.token);

    if (response.error || response == "error") {
      alert("Something went wrong. Please refresh and submit the test.");
      return;
    }

    setAnswersState({});
    window.location.href = `/user/profile`;
    // window.location.href = `/test/${test?.id}/result`;
    setIsSubmitting(false);
  }

  return {
    answers,
    setAnswers,
    progress,
    currentQuestionIndex,
    goToNextQuestion,
    goToPreviousQuestion,
    showPrevious,
    showNext,
    timeRemaining,
    secondsRemaining,
    showSubmitButton,
    isSubmitting,
    handleSubmit,
  };
}

function getTimeRemainingInSeconds(
  start_time: string,
  duration: string
): number {
  const totalDurationInSeconds: number = getSecondsFromDuration(duration);

  const start = new Date(`${start_time}`);
  const now = new Date();
  const end = new Date(`${start_time}`);
  end.setTime(start.getTime() + totalDurationInSeconds * 1000);

  const secondsLeft: number = (end.getTime() - now.getTime()) / 1000;

  return Math.floor(secondsLeft);
}

function getSecondsFromDuration(duration: string): number {
  const [hours, mins, seconds] = duration.split(":");

  let totalSeconds: number = 0;
  totalSeconds += parseInt(hours) * 60 * 60;
  totalSeconds += parseInt(mins) * 60;
  totalSeconds += parseInt(seconds);

  return totalSeconds;
}

function parseSecondsToClock(secondsRemaining: number): string {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = Math.floor(secondsRemaining % 60);

  return `${mins < 10 ? `0${mins}` : mins}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
}
