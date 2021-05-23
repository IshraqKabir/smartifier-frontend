import { useEffect, useState } from "react";
import useLocalState from "../../custom-hooks/useLocalState";
import IQuiz from "../../Models/IQuiz";
import ITest from "../../Models/ITest";
import TTestStatus from "../../Models/TTestStatus";
import startTest from "../../repository/QuizTest/startTest";

export default function useQuizTest(quizId: number) {
  const [user] = useLocalState("user", "");
  const [isLoading, setIsLoading] = useState(false);
  const [testStatus, setTestStatus] = useState<TTestStatus | "">("");
  const [quiz, setQuiz] = useState<IQuiz>();
  const [test, setTest] = useState<ITest>();

  useEffect(() => {
    if (!user || !user?.token) return;
    fetchStartTest();
  }, []);

  const fetchStartTest = async () => {
    setIsLoading(true);

    const response = await startTest(quizId, user?.token);

    setTestStatus(response?.status);
    setQuiz(response?.quiz);
    setTest(response?.test);

    setIsLoading(false);
  };

  return {
    isLoading,
    testStatus,
    quiz,
    test,
  };
}
