import { Box, Typography, withStyles } from "@material-ui/core";
import TTestStatus from "../../../../../../../Models/TTestStatus";
import useBottomBar from "./useBottomBar";

interface IProps {
  testStatus: TTestStatus;
  quizId: number;
}

export default function BottomBar({ testStatus, quizId }: IProps) {
  const { buttonText, startTest } = useBottomBar(testStatus);

  return (
    <Container>
      {testStatus !== "highest_attempt_count_reached" ? (
        <Button
          onClick={() => {
            startTest(quizId);
          }}
        >
          <ButtonText variant="subtitle1" color="inherit">
            {buttonText}
          </ButtonText>
        </Button>
      ) : (
        <ButtonText color="error">
          You have already reached the highest attempt count.
        </ButtonText>
      )}
    </Container>
  );
}

const Container = withStyles({
  root: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "1rem",
    backgroundColor: "#f0f2f5",
    borderTop: "1px solid lightgray",
  },
})(Box);

const Button = withStyles({
  root: {
    float: "right",
    color: "white",
    backgroundColor: "#0e62cb",
    padding: "0.4rem 1rem",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#09448e",
    },
  },
})(Box);

const ButtonText = withStyles({
  root: {
    fontWeight: 600,
    textTransform: "capitalize",
  },
})(Typography);
