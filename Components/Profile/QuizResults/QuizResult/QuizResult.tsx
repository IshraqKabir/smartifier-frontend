import { Avatar, makeStyles } from "@material-ui/core";
import React from "react";

interface IProps {
  quiz_title: string;
  score: number;
  quiz_image_link: string;
}

const QuizResult = ({ quiz_title, score, quiz_image_link }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Avatar
          alt={`${quiz_title}`}
          src={`${quiz_image_link}`}
          style={{ height: "80px", width: "80px" }}
        />
      </div>
      <div className={classes.titleAndScoreContainer}>
        <div className={classes.title}>{quiz_title}</div>
        <div className={classes.score}>Score: {score.toFixed(2)}%</div>
      </div>
    </div>
  );
};

export default QuizResult;

const useStyles = makeStyles({
  container: {
    width: "100%",
    padding: "2rem 1rem",
    display: "flex",
    alignItems: "center",
    color: "#252525C7",
    marginTop: "2rem",
    borderRadius: 5,
    minHeight: 100,
    background:
      "transparent linear-gradient(180deg, #BAE3F9 0%, #87B2DF 100%) 0% 0% no-repeat padding-box",
  },
  imageContainer: {
    margin: "0rem 1rem 0rem 3rem",
  },
  titleAndScoreContainer: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontWeight: 700,
    fontSize: "1.2rem",
    textTransform: "capitalize",
  },
  score: {
    fontWeight: 500,
  },
});
