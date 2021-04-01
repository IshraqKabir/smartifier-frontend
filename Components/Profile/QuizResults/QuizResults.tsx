import { Box, makeStyles, withStyles } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useLocalState from "../../../custom-hooks/useLocalState";
import { local_backend_url } from "../../../url";
import QuizResult from "./QuizResult/QuizResult";

interface IProps {}

const QuizResults: React.FC<IProps> = ({}) => {
  const [user] = useLocalState("user", "");
  const [results, setResults] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios({
      method: "get",
      url: `${local_backend_url}/api/quiz-test/results`,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    }).then((response) => {
      setResults(response.data);
    });
  }, []);
  return (
    <Container>
      <div className={classes.header}>Quiz Results</div>
      {results &&
        results.map((result) => {
          return (
            <QuizResult
              key={result.id}
              quiz_title={result.quiz?.title}
              score={result.percentage}
              quiz_image_link={`${local_backend_url}/storage/${result.quiz?.image?.image_link}`}
            />
          );
        })}
    </Container>
  );
};

export default QuizResults;

const Container = withStyles({
  root: {
    marginTop: "3rem",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "4rem",
    ["@media (max-width: 600px)"]: {
      padding: "0.5rem",
    },
  },
})(Box);

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  header: {
    width: "50%",
    borderBottom: "1px solid grey",
    color: "#3798A7",
    padding: "0.5rem 0rem",
    fontSize: "1.2rem",
  },
});
