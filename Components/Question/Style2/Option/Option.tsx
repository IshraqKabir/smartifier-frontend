import React, { useContext } from "react";

import { Box, makeStyles, Typography, withStyles } from "@material-ui/core";
import IOption from "../../../../Models/IOption";

interface IProps {
  option: IOption;
  position: number;
  isChecked?: boolean;
}

const Option: React.FC<IProps> = ({ option, position, isChecked }) => {
  const classes = useStyles({ isChecked });

  return (
    <div className={classes.container}>
      {option.title && (
        <div className={classes.textContainer}>
          <div className={classes.optionButton} />
          <Typography>{`${String.fromCharCode(position + 64)}. ${
            option.title
          }`}</Typography>
        </div>
      )}
    </div>
  );
};

export default Option;

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    margin: "0.3rem 0rem",
    marginBottom: "2rem",
    width: "100%",
  },
  textContainer: {
    background: (props: { isChecked: boolean }) => {
      return props.isChecked
        ? "#209434"
        : "transparent linear-gradient(180deg, #995FD4 0%, #1F29356E 100%) 0% 0% no-repeat padding-box";
    },
    width: "100%",
    padding: "1rem 1rem",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
  },
  optionButton: {
    padding: (props: { isChecked: boolean }) => {
      return props.isChecked ? "0.5rem" : "0.7rem";
    },
    backgroundColor: (props: { isChecked: boolean }) => {
      return props.isChecked ? "white" : "#17ABC2";
    },
    borderRadius: "50%",
    overflow: "hidden",
    marginRight: "1rem",
    border: (props: { isChecked: boolean }) => {
      return props.isChecked ? "5px solid #17ABC2" : "none";
    },
  },
});

const Container = withStyles({
  root: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    margin: "0.3rem 0rem",
    marginBottom: "2rem",
    width: "100%",
  },
})(Box);

const TextContainer = withStyles({
  root: {
    background:
      "transparent linear-gradient(180deg, #995FD4 0%, #1F29356E 100%) 0% 0% no-repeat padding-box",
    width: "100%",
    padding: "1rem 1rem",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
  },
})(Box);

const OptionButton = withStyles({
  root: {
    padding: "0.7rem",
    backgroundColor: "#17ABC2",
    borderRadius: "50%",
    overflow: "hidden",
    marginRight: "1rem",
  },
})(Box);
