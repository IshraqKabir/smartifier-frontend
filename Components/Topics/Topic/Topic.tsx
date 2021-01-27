import { makeStyles, Typography, withStyles } from "@material-ui/core";
import React from "react";
import ITopic from "../../../Models/ITopic";

interface IProps {
  topic: ITopic;
  position: number;
}

const Topic: React.FC<IProps> = ({ topic, position }) => {
  const classes = useStyles({ position });

  return (
    <div className={classes.container}>
      <div className={classes.icon}></div>
      <TopicName variant="subtitle1">{topic.name}</TopicName>
    </div>
  );
};

export default Topic;

const colors: string[] = [
  "#97A5B8",
  "#9C95FD",
  "#F493FF",
  "#28E36E",
  "#FFE533",
];

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    paddingBlock: 15,
    fontColor: "blue",
    textTransform: "capitalize",
    marginRight: "10%",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  icon: {
    backgroundColor: (props: { position: number }) => {
      const { position } = props;
      if (position > colors.length) {
        return colors[position % colors.length];
      }
      return colors[position];
    },
    height: 24,
    width: 24,
    borderRadius: "50%",
    marginRight: 15,
  },
});

const TopicName = withStyles({
  root: {
    color: "#96A4B7",
    fontWeight: 500,
    cursor: "pointer",
  },
})(Typography);
