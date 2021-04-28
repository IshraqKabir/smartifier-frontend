import React, { useEffect, useState } from "react";
import getIsOptionChecked from "../../../../../../../UtilFunctions/getIsOptionChecked";

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
