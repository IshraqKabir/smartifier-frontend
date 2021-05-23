import axios from "axios";
import { backend_url } from "../../url";

export default async function getBadgeImageLink(testId: number, token: string) {
  if (!testId) return;

  const quizStatus = await axios
    .get(`${backend_url}/api/quiz-test/${testId}/get-badge-image-link`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return { error: err };
    });

  return quizStatus;
}
