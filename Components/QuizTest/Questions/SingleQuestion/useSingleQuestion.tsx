import { useEffect, useState } from "react";

export default function useSingleQuestion(
  index: number,
  currentQuestionIndex: number
) {
  const [isVisible, setIsVisible] = useState(index == currentQuestionIndex);
  const [direction, setDirection] = useState<"left" | "right">("right");

  useEffect(() => {
    if (currentQuestionIndex > index) {
      setDirection("right");
    } else if (currentQuestionIndex < index) {
      setDirection("left");
    }

    setIsVisible(index == currentQuestionIndex);
  }, [currentQuestionIndex]);

  return { isVisible, direction };
}
