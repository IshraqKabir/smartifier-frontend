import React from "react";
import IQuestion from "../../../Models/IQuestion";

interface IProps {
  question: IQuestion;
}

const Style3: React.FC<IProps> = ({ question }) => {
  return <p>Style3</p>;
};

export default Style3;