import IQuestion from "./IQuestion";
import IQuiz from "./IQuiz";

export default interface ITest {
  id: number;
  created_at: string;
  has_passed?: boolean;
  percentage?: number;
  correct_answers?: any;
  correct_answers_count?: number;
  questions?: IQuestion;
}
