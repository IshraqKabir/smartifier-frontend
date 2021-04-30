import { Box, withStyles } from "@material-ui/core";
import { useContext } from "react";
import { QuestionContext } from "../../SingleQuestion";
import Option from "./Option/Option";

import TextAnswer from "./TextAnswer/TextAnswer";

interface IProps {}

export default function Options({}: IProps) {
  const { question } = useContext(QuestionContext);

  return (
    <Container>
      {question?.options &&
        question?.answer_type != "short_paragraph" &&
        question?.options.map((option) => {
          return <Option key={option?.id} option={option} />;
        })}
      {question?.answer_type == "short_paragraph" && <TextAnswer />}
    </Container>
  );
}

const Container = withStyles({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#eef3f7",
    marginTop: "0.5rem",
    padding: "0 0.5rem",
  },
})(Box);
