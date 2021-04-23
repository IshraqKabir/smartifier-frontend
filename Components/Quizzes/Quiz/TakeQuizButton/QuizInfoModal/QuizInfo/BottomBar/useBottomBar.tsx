import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TTestStatus from "../../../../../../../Models/TTestStatus";

export default function useBottomBar(testStatus: TTestStatus) {
  const [buttonText, setButtonText] = useState<"start" | "retake" | "loading">(
    "start"
  );

  const router = useRouter();

  useEffect(() => {
    if (testStatus === "retake") {
      setButtonText("retake");
    } else {
      setButtonText("start");
    }
  }, [testStatus]);

  const startTest = (quizId: number) => {
    if (!quizId || buttonText === "loading") return;

    if (
      testStatus === "new_test" ||
      testStatus === "ongoing" ||
      testStatus === "retake"
    ) {
      router.push(`/test/quiz/${quizId}`);
      setButtonText("loading");
    }
  };

  return { buttonText, startTest };
}
