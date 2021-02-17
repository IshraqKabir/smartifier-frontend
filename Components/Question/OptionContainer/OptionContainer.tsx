import { Box, withStyles } from "@material-ui/core";
import { cloneElement, Fragment, useContext, useEffect, useState } from "react";
import { AnswersContext } from "../Question";

const OptionContainer = (props) => {
  const { answers, setAnswers, getIsChecked } = useContext(AnswersContext);

  const [isChecked, setIsChecked] = useState<boolean>(
    getIsChecked(props.option.id)
  );

  useEffect(() => {
    console.log(
      `${props.option.title}:${props.option.id} is ${
        getIsChecked(props.option.id) ? "checked" : "unchecked"
      }`
    );
    setIsChecked(getIsChecked(props.option.id));
  }, [answers]);

  return (
    <Container onClick={() => setAnswers(props.option.id)}>
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
