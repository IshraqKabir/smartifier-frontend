import React from "react";
import IQuestion from "../../../Models/IQuestion";

interface IProps {
  question: IQuestion;
}

const Style1: React.FC<IProps> = ({ question }) => {
  return <p>Style1</p>;
};

export default Style1;
