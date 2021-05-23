import { Box, Typography, withStyles } from "@material-ui/core";

interface IProps {
  quizOrAssessment: String;
  highestAttemptCount: number;
}
export default function BeforeYouStart({
  quizOrAssessment,
  highestAttemptCount,
}: IProps) {
  return (
    <Container>
      <Heading variant="h6">Before You Start</Heading>
      <ul style={{ margin: "0 0.8rem" }}>
        <li>
          <Point>
            The answers will be automatically submitted when time finishes.
          </Point>
        </li>
        {/* <li>
          <Point>
            You can retake the {quizOrAssessment} upto {highestAttemptCount}{" "}
            times.
          </Point>
        </li> */}
        <li>
          <Point>Don't forget to share your result after completion!</Point>
        </li>
      </ul>
    </Container>
  );
}

const Container = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
})(Box);

const Heading = withStyles({
  root: {
    fontWeight: 600,
    margin: "0.5rem 0",
  },
})(Typography);

const Point = withStyles({
  root: {},
})(Typography);
