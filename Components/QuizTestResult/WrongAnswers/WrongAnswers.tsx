import { Box, withStyles } from "@material-ui/core";

interface IProps {
  questions: any;
}

export default function CorrectAnswers({}: IProps) {
  return <Container>
      
  </Container>;
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
