import IQuestion from "../Models/IQuestion";

export default function getIsChecked(
  optionID: number,
  question: IQuestion,
  answers: any
): boolean {
  if (
    answers &&
    answers[question.id] &&
    answers[question.id].includes(optionID)
  ) {
    return true;
  }

  return false;
}
