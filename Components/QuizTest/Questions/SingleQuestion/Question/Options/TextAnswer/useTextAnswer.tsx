import { useState } from "react";

export default function useTextAnswer(
  question: any,
  answers: any,
  setAnswers: (optionID: number, question: any, text?: string) => void
) {
  const [text, setText] = useState(getTextValue());

  function getTextValue(): string {
    if (!answers) return "";

    return answers[`${question?.id}`]?.text;
  }

  function handleChange(e: any) {
    setText(e?.target?.value);
    setAnswers(question?.options[0]?.id, question, e?.target?.value);
  }

  return { text, handleChange };
}
