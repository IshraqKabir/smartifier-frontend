import React from "react";
import { GetStaticProps } from "next";

import IQuiz from "../Models/IQuiz";

import axios from "axios";
import { local_backend_url } from "../url";

import QuizzesComponent from "../Components/Quizzes/Quizzes";

export const getStaticProps: GetStaticProps = async (context) => {
  const quizzesRes: any = await axios.get(
    local_backend_url + "/api/frontend/quizzes"
  );
  const quizzes: IQuiz[] = [...quizzesRes.data];

  return {
    props: {
      quizzes: quizzes,
    },
  };
};

interface IProps {
  quizzes: IQuiz[];
}

const Quizzes: React.FC<IProps> = ({ quizzes }) => {
  return <QuizzesComponent quizzes={quizzes} />;
};

export default Quizzes;
