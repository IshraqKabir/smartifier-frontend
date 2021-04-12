import { Box, withStyles } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import useLocalState from "../../../custom-hooks/useLocalState";
import IQuiz from "../../../Models/IQuiz";
import { local_backend_url } from "../../../url";
import Topbar from "../../Layout/Topbar/Topbar";
import QuizTest from "../QuizTest";
import RetakePrompt from "./RetakePrompt/RetakePrompt";

interface IProps {
  quizID: number;
}

const CheckTestStatus: React.FC<IProps> = ({ quizID }) => {
  const [status, setStatus] = useState<
    "ongoing" | "retake" | "new_test" | "unknown"
  >("unknown");
  const [percentage, setPercentage] = useState<Number>(0);
  const [quiz, setQuiz] = useState<IQuiz>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user] = useLocalState("user", "");

  const [showTest, setShowTest] = useState<boolean>(false);

  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current.scrollIntoView({ behaviour: "smooth" });
  }, []);

  useEffect(() => {
    axios
      .get(`${local_backend_url}/api/quiz-test/${quizID}/check-status`, {
        headers: {
          Accept: "Application/json",
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        setStatus(response.data.status);

        if (response.data.status == "retake") {
          setPercentage(response.data.percentage);
          setQuiz(response.data.quiz);
        } else if (response.data.status == "ongoing") {
          setStatus("ongoing");
          setShowTest(true);
        } else if (response.data.status == "new_test") {
          setStatus("new_test");
          setShowTest(true);
        }

        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Topbar />
      <div ref={containerRef} />
      <Container>
        {status == "unknown" && !isLoading && (
          <p>Some Error Occured. Please Refresh or Go Back.</p>
        )}

        {status == "retake" && !isLoading && !showTest && (
          <RetakePrompt
            quizID={quizID}
            percentage={percentage}
            quiz={quiz}
            setShowTest={() => setShowTest(true)}
          />
        )}

        {showTest && !isLoading && <QuizTest id={quizID} status={status} />}
      </Container>
    </>
  );
};

export default CheckTestStatus;

const Container = withStyles({
  root: {
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#5D00A5",
    minHeight: "100vh",
    color: "white",
  },
})(Box);
