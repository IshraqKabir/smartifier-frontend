import { useEffect } from "react";
import useLocalState from "./useLocalState";

type answerType = "multiple_choice" | "checkboxes";

export default function useOptionClicked(
  optionID: number,
  questionID: number,
  quizID: number,
  answerType: answerType
) {
  const [user] = useLocalState("user", "");
  const [answers, setAnswers] = useLocalState(`${user.email}-${quizID}`, {});

  const handleClick = () => {
    console.log(
      `${user.email} has clicked option: ${optionID} of question: ${questionID}`
    );

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

  useEffect(() => {
    console.log("answer changed");
    console.log(answers);
  }, [answers]);

  return [handleClick];
}
