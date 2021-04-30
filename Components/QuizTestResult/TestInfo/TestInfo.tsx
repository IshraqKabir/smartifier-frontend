import { Box, Typography, withStyles } from "@material-ui/core";
import { AssessmentTwoTone } from "@material-ui/icons";
import IQuiz from "../../../Models/IQuiz";
import ITest from "../../../Models/ITest";

interface IProps {
  test: ITest;
  quiz: IQuiz;
}

export default function TestInfo({ test, quiz }: IProps) {
  const assessmentOrQuiz = quiz?.is_assessment ? "Assessment" : "Quiz";

  return (
    <Container>
      <Title variant="h6">{`${quiz?.title} ${assessmentOrQuiz}`}</Title>
      <Divider />
      <HasPassedText>
        {test?.has_passed
          ? `Congrats, you have passed the ${AssessmentTwoTone}`
          : `Sorry,`}
      </HasPassedText>
    </Container>
  );
}

const Container = withStyles({
  root: {
    width: "100%",
    border: "1px solid #e6e6e4",
    borderRadius: "5px 5px 0px 0px",
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
    margin: "1rem",
  },
})(Typography);
