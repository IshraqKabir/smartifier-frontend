import axios from "axios";
import { local_backend_url } from "../../url";

export default async function submitTest(
  testId: number,
  answers: any,
  token: string
) {
  const finalAnswers = Object.keys(answers).map((key) => {
    return {
      options: answers[key],
    };
  });

  const response = await axios
    .post(
      `${local_backend_url}/api/quiz-test/answers/store`,
      {
        test_id: testId,
        answers: finalAnswers,
      },
      {
        headers: {
          Accept: "Application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch(() => {
      return { error: "network error" };
    });

  return response;
}
