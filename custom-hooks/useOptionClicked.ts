import { useEffect, useState } from "react";
import useLocalState from "./useLocalState";

type answerType = "multiple_choice" | "checkboxes";

export default function useOptionClicked(
  optionID: number,
  questionID: number,
  quizID: number,
  answerType: answerType
): [handleClick: Function, answers: any] {
  const [user] = useLocalState("user", "");
  const [answers, setAnswers] = useLocalState(
    `${user.email}-quiz${quizID}-answers`,
    {}
  );

  const handleClick = () => {
    // console.log(
    //   `${user.email} has clicked option: ${optionID} of question: ${questionID}`
    // );

    setAnswers((state: any) => {
      let tempAnswers = { ...state };

      if (answerType === "multiple_choice") {
        tempAnswers = { ...state, [`${questionID}`]: [optionID] };
      } else if (answerType === "checkboxes") {
        tempAnswers = {
          ...state,
          [`${questionID}`]: [...tempAnswers[`${questionID}`], optionID],
        };
      }

      return { ...tempAnswers };
    });
  };

  return [handleClick, answers];
}

export function getIsChecked(
  answers: any,
  questionID: number,
  optionID: number
): boolean {
  if (answers[questionID] && answers[questionID].includes(optionID)) {
    return true;
  }

  return false;
}
