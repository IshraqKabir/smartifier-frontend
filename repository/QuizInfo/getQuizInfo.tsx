import axios from "axios";
import { backend_url } from "../../url";

export default async function startResumeOrRetakeTest(
  quizId: number,
  token: string
) {
  const quizInfo = await axios
    .get(`${backend_url}/api/quiz-test/${quizId}/get-info`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data;
    });

  return quizInfo;
}
