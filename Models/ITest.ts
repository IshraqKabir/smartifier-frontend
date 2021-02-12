import IQuiz from "./IQuiz";

export default interface ITest {
  id: number;
  quiz: IQuiz;
  created_at: string;
  updated_at: string;
}
