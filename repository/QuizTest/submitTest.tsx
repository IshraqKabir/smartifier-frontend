import axios from "axios";
import { local_backend_url } from "../../url";

export default async function submitTest(
  testId: number,
  answers: any,
  token: string
) {
  if (!answers) return;

  const response = await axios
    .post(
      `${local_backend_url}/api/quiz-test/answers/store`,
      {
        test_id: testId,
        options: answers,
      },
      {
        headers: {
          Accept: "Application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      return { error: "network error" };
    });

  return response;
}
