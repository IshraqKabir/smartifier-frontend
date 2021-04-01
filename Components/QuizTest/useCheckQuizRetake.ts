import axios from "axios";
import { useEffect, useState } from "react";
import useLocalState from "../../custom-hooks/useLocalState";
import ITest from "../../Models/ITest";
import { local_backend_url } from "../../url";

export default function useStartTest(id: number) {
  const [user] = useLocalState("user", "");
  const [isRetake, setIsRetake] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(true);

  useEffect(() => {
    axios
      .post(
        `${local_backend_url}/api/quiz-test/check_is_retake`,
        {
          quiz_id: id,
        },
        {
          headers: {
            Accept: "Application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((response) => {
        setIsLoading(false);
        setIsError(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  return { isLoading, isError };
}
