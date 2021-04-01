import axios from "axios";
import { useEffect, useState } from "react";
import useLocalState from "../../custom-hooks/useLocalState";
import ITest from "../../Models/ITest";
import { local_backend_url } from "../../url";

export default function useStartTest(
  id: number,
  status: "retake" | "ongoing" | "new_test" | "unknown"
) {
  const [user] = useLocalState("user", "");
  const [test, setTest] = useState<ITest>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(true);

  useEffect(() => {
    if (status == "unknown") return;

    const url: string = `${local_backend_url}/api/quiz-test/${
      status == "new_test" ? "start" : status == "ongoing" ? "resume" : "retake"
    }`;

    axios
      .post(
        url,
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
        setTest(response.data);
        setIsLoading(false);
        setIsError(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  return { test, isLoading, isError };
}
