import { Box, withStyles } from "@material-ui/core";
import { cloneElement, useContext, useEffect, useState } from "react";
import { AnswersContext } from "../../QuizTest/QuizTest";

import getIsChecked from "../../../UtilFunctions/getIsChecked";
import { QuestionContext } from "../../Questions/Questions";

const OptionContainer = (props) => {
  const { answers, setAnswers } = useContext(AnswersContext);
  const { question } = useContext(QuestionContext);

  const [isChecked, setIsChecked] = useState<boolean>(
    getIsChecked(props.option.id, question, answers)
  );

  useEffect(() => {
    // console.log(
    //   `${props.option.title}:${props.option.id} is ${
    //     getIsChecked(props.option.id, question, answers)
    //       ? "checked"
    //       : "unchecked"
    //   }`
    // );
    setIsChecked(getIsChecked(props.option.id, question, answers));
  }, [answers]);

  return (
    <Container onClick={() => setAnswers(props.option.id, question)}>
      {cloneElement(props.children, { ...props, isChecked })}
    </Container>
  );
};

export default OptionContainer;

const Container = withStyles({
  root: {
    margin: 0,
    padding: 0,
    height: "100%",
  },
})(Box);
