import { useEffect, useState } from "react";
import useLocalState from "../../../../../../custom-hooks/useLocalState";
import IQuiz from "../../../../../../Models/IQuiz";
import TTestStatus from "../../../../../../Models/TTestStatus";
import getQuizInfo from "../../../../../../repository/QuizInfo/getQuizInfo";



export default function useQuizInfo(quizId: number) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [testStatus, setTestStatus] = useState<TTestStatus>("unknown");
  const [quizInfo, setQuizInfo] = useState<any>({});
  const [userInfo, setUserInfo] = useState<any>({});
  const [user] = useLocalState("user", "");

  useEffect(() => {
    fetchQuizInfo();
  }, []);

  const fetchQuizInfo = async () => {
    setIsLoading(true);
    const response = await getQuizInfo(quizId, user?.token);
    setIsLoading(false);

    const _testStatus = response?.test_status;

    if (
      _testStatus !== "new_test" &&
      _testStatus !== "retake" &&
      _testStatus !== "highest_attempt_count_reached" &&
      _testStatus !== "ongoing"
    ) {
      setTestStatus("unknown");
      return;
    }

    setTestStatus(response?.test_status);
    setQuizInfo(response?.quiz_info);
    setUserInfo(response?.user_info);

    console.log(response);
  };

  return {
    testStatus,
    quizInfo,
    userInfo,
    isLoading,
  };
}
