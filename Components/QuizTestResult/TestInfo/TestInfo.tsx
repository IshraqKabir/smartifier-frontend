import { Box, Typography, withStyles } from "@material-ui/core";
import IQuiz from "../../../Models/IQuiz";
import ITest from "../../../Models/ITest";

interface IProps {
  test: ITest;
  quiz: IQuiz;
}

export default function TestInfo({ test, quiz }: IProps) {
  const assessmentOrQuiz = quiz?.is_assessment ? "assessment" : "quiz";

  const passedText = `Congratulations! You have passed the ${assessmentOrQuiz} on
  ‘${quiz?.title}’. Do remember to share your badge on social
  media for personal branding.`;

  // const passedText = `Congratulations! You have passed the ${assessmentOrQuiz} on
  // ‘${quiz?.title}’.`;

  const failedText = `Thank you for participating in the quiz on
  ‘${quiz?.title}’! Please retake the quiz and try to get your
  badge by scoring more than ${quiz?.passing_percentage}% marks.`;

  const handleClick = () => {
    window.location.href = `/test/quiz/${quiz?.id}`;
  };

  return (
    <Container>
      <Title variant="h5">{`${quiz?.title} ${assessmentOrQuiz}`}</Title>
      <Divider />
      <ScoreContainer>
        <Typography variant="subtitle1">
          Score: <b>{`${test?.percentage}%`}</b>
        </Typography>
        <Typography variant="subtitle1">
          Total Questions: <b>{`${quiz?.total_questions_count}`}</b>
        </Typography>
        <Typography variant="subtitle1">
          Right Answers:{" "}
          <b>{`${test?.questions?.correct_questions?.length}`}</b>
        </Typography>
        {test && test?.questions && test?.questions?.wrong_questions && (
          <Typography variant="subtitle1">
            Wrong Answers:{" "}
            <b>{`${test?.questions?.wrong_questions?.length}`}</b>
          </Typography>
        )}
        <Typography variant="subtitle1">
          Not Answered: <b>{`${test?.not_answered_questions_count}`}</b>
        </Typography>
      </ScoreContainer>
      <HasPassedText variant="subtitle1">
        {test?.has_passed ? passedText : failedText}
      </HasPassedText>
      <RetakeButton onClick={handleClick}>
        <RetakeButtonText>Retake</RetakeButtonText>
      </RetakeButton>
    </Container>
  );
}

const Container = withStyles({
  root: {
    width: "100%",
    border: "1px solid #e6e6e4",
    borderRadius: "7px 7px 0px 0px",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
})(Box);

const Title = withStyles({
  root: {
    padding: "0.7rem",
    textTransform: "capitalize",
  },
})(Typography);

const Divider = withStyles({
  root: {
    width: "100%",
    height: 2,
    backgroundColor: "#e6e6e4",
  },
})(Box);

const HasPassedText = withStyles({
  root: {
    fontWeight: 500,
    margin: "1rem 0",
    textAlign: "center",
  },
})(Typography);

const ScoreContainer = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "1rem 0",
    padding: "1rem",
    border: "1px solid lightgray",
    borderRadius: 7,
    width: "min(600px, 97%)",
  },
})(Box);

const RetakeButton = withStyles({
  root: {
    float: "right",
    margin: "1rem 0.5rem 0.5rem auto",
    right: 10,
    color: "white",
    backgroundColor: "#0e62cb",
    padding: "0.4rem 1rem",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#09448e",
    },
  },
})(Box);

const RetakeButtonText = withStyles({
  root: {
    fontWeight: 600,
    textTransform: "capitalize",
  },
})(Typography);
