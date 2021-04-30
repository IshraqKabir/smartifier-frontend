import { useEffect, useState } from "react";
import useLocalState from "../../custom-hooks/useLocalState";
import IQuiz from "../../Models/IQuiz";
import ITest from "../../Models/ITest";
import getResultInfo from "../../repository/QuizTestResult/getResultInfo";

export default function useQuizTestResult(testId: number) {
  const [user] = useLocalState("user", "");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(true);

  const [test, setTest] = useState<ITest>();
  const [quiz, setQuiz] = useState<IQuiz>();

  useEffect(() => {
    fetchResultInfo();
  }, []);

  async function fetchResultInfo() {
    if (!user) return;
    setIsLoading(true);

    const response = await getResultInfo(testId, user?.token);

    setIsAuthorized(response?.is_authorized);
    setTest(response?.test);
    setQuiz(response?.quiz);

    setIsLoading(false);

    console.log(response);
  }

  return { isLoading, isAuthorized, test, quiz };
}
