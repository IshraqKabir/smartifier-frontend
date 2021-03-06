import { useEffect, useState } from "react";
import useLocalState from "../../../custom-hooks/useLocalState";
import getBadgeImageLink from "../../../repository/QuizTest/getBadgeImageLink";

export default function useBadge(testId: number, isAssessment: boolean) {
  const [user] = useLocalState("user", "");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [badgeImageLink, setBadgeImageLink] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (user) fetchBadgeImageLink();
  }, []);

  async function fetchBadgeImageLink() {
    setIsLoading(true);
    const response = await getBadgeImageLink(testId, user?.token);

    setIsLoading(false);

    if (response.error) {
      setError("Something went wrong. Please contact our support.");
    }

    if (response == "not_quiz" || response == "failed") {
      setError("Some Error has occured, sorry. Please contact our support.");
      return;
    }

    if (response == "badge_not_ready_yet") {
      setError("Sorry, we are still working on your badge.");
      return;
    }

    setBadgeImageLink(response);
  }

  function getWidth() {
    if (isAssessment) {
      return "95%";
    }

    return "min(400px, 95%)";
  }

  function getHeight() {
    if (isAssessment) {
      return "100%";
    }

    return "100%";
  }

  return {
    isLoading,
    error,
    badgeImageLink,
    getHeight,
    getWidth,
  };
}
