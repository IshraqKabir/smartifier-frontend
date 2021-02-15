import React from "react";
import IQuestion from "../../../Models/IQuestion";

interface IProps {
  question: IQuestion;
}

const Style2: React.FC<IProps> = ({ question }) => {
  return <p>Style2</p>;
};

export default Style2;