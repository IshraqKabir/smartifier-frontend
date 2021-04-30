import IQuiz from "./IQuiz";

export default interface ITest {
  id: number;
  created_at: string;
  has_passed?: boolean;
}
