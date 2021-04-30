import { useEffect, useState } from "react";
import IQuestion from "../../../../../../../Models/IQuestion";

export default function useOption(
  optionId: number,
  question: any,
  answers: any,
  setAnswers: (optionId: number, question: any) => void
) {
  const [isChecked, setIsChecked] = useState(
    getIsOptionChecked(optionId, question, answers)
  );

  useEffect(() => {
    setIsChecked(getIsOptionChecked(optionId, question, answers));
  }, [answers]);

  const handleClick = () => {
    setAnswers(optionId, question);
  };

  return { isChecked, handleClick };
}

function getIsOptionChecked(
  optionId: number,
  question: IQuestion,
  answers: any
): boolean {
  if (!answers) {
    return false;
  }

  if (!answers[question?.id]) {
    return false;
  }

  if (!Array.isArray(answers[question?.id])) {
    return false;
  }

  let checked = false;

  answers[question?.id]?.forEach((option) => {
    if (option?.optionId == optionId) {
      checked = true;
    }
  });

  return checked;
}
