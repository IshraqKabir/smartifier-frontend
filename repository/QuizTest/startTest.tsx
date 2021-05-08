import axios from "axios";
import { backend_url } from "../../url";

export default async function startTest(quizId: number, token: string) {
  if (!quizId) return;

  const quizStatus = await axios
    .post(
      `${backend_url}/api/quiz-test/start`,
      {
        quiz_id: quizId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      return response.data;
    });

  return quizStatus;
}
