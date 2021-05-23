import { useState } from "react";

export default function useTextAnswer(
  question: any,
  answers: any,
  setAnswers: (optionID: number, question: any, text?: string) => void
) {
  const [text, setText] = useState(getTextValue());

  function getTextValue(): string {
    if (
      !answers ||
      !answers[`${question?.id}`] ||
      !answers[`${question?.id}`][0]
    ) {
      return "";
    }

    return answers[`${question?.id}`][0]?.text;
  }

  function handleChange(e: any) {
    setText(e?.target?.value);
    setAnswers(question?.options[0]?.id, question, e?.target?.value);
  }

  return { text, handleChange };
}
