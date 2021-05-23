import {
  Avatar,
  Checkbox,
  makeStyles,
  Radio,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { useContext } from "react";
import { backend_url } from "../../../../../../../url";
import { QuizTestStateContext } from "../../../../Questions";
import { QuestionContext } from "../../../SingleQuestion";
import useOption from "./useOption";

interface IProps {
  option: any;
}

export default function Option({ option }: IProps) {
  const { answers, setAnswers } = useContext(QuizTestStateContext);
  const { question } = useContext(QuestionContext);

  const { isChecked, handleClick } = useOption(
    option?.id,
    question,
    answers,
    setAnswers
  );

  const shouldCenter: boolean = option?.image != null ? true : false;
  const classes = useStyles({ shouldCenter });

  return (
    <div className={classes.container} onClick={handleClick}>
      {question?.answer_type === "multiple_choice" && (
        <Radio checked={isChecked} />
      )}
      {question?.answer_type === "checkboxes" && (
        <Checkbox checked={isChecked} />
      )}
      <div className={classes.titleAndImageContainer}>
        {option?.title && <Title>{option?.title}</Title>}
        {option?.image?.image_link && (
          <Avatar
            src={`${backend_url}/storage/${option?.image?.image_link}`}
            variant="square"
            style={{ height: 200, width: 200, margin: "0.2rem 0" }}
          />
        )}
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  container: {
    borderTop: "1px solid gray",
    padding: "0.1rem 0rem",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  titleAndImageContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: ({ shouldCenter }: { shouldCenter: boolean }) => {
      return shouldCenter ? "center" : "";
    },
  },
});

const Title = withStyles({
  root: {},
})(Typography);
