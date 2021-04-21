import { useEffect, useState } from "react";
import useLocalState from "../../../../../../custom-hooks/useLocalState";
import getQuizInfo from "../../../../../../repository/QuizInfo/getQuizInfo";

export default function useQuizInfo(quizId: number) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user] = useLocalState("user", "");

  useEffect(() => {
    fetchQuizInfo();
  }, []);

  const fetchQuizInfo = async () => {
    setIsLoading(true);
    const quizInfo = await getQuizInfo(quizId, user?.token);
    setIsLoading(false);
    console.log(quizInfo);
  };

  return {
    isLoading,
  };
}
