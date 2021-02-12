import axios from "axios";
import { useEffect, useState } from "react";
import useLocalState from "../../custom-hooks/useLocalState";
import ITest from "../../Models/ITest";
import { local_backend_url } from "../../url";

export default function useStartTest(id: number) {
  const [user] = useLocalState("user", "");
  const [test, setTest] = useState<ITest>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(true);

  useEffect(() => {
    axios
      .post(
        `${local_backend_url}/api/test/start`,
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
