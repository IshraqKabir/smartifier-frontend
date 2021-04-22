import { useEffect, useState } from "react";
import TTestStatus from "../../../../../../../Models/TTestStatus";

export default function useBottomBar(testStatus: TTestStatus) {
  const [buttonText, setButtonText] = useState<"start" | "retake">("start");

  useEffect(() => {
    if (testStatus === "retake") {
      setButtonText("retake");
    } else {
      setButtonText("start");
    }
  }, [testStatus]);

  return { buttonText };
}
