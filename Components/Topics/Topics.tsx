import React from "react";
import { makeStyles } from "@material-ui/core";

import ITopic from "../../Models/ITopic";
import Topic from "./Topic/Topic";

interface IProps {
  topics: ITopic[];
}

const useStyles = makeStyles({
  container: {
    width: "100%",
    borderTop: "1px solid #96A4B7",
    borderBottom: "1px solid #96A4B7",
    display: "flex",
    alignItems: "center",
    paddingLeft: 5,
    paddingRight: 5,
    ["@media (max-width: 700px)"]: {
      overflowX: "scroll",
    },
    zIndex: 100,
  },
});

const Topics: React.FC<IProps> = ({ topics }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {topics.map((topic, position) => (
        <Topic key={topic.id} topic={topic} position={position} />
      ))}
    </div>
  );
};

export default Topics;
