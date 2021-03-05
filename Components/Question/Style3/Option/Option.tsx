import React from "react";

import {
  Avatar,
  Box,
  makeStyles,
  Typography,
  withStyles,
} from "@material-ui/core";
import IOption from "../../../../Models/IOption";

import { local_backend_url } from "../../../../url";

interface IProps {
  option: IOption;
  position: number;
  isChecked?: boolean;
}

const Option: React.FC<IProps> = ({ option, position, isChecked }) => {
  const classes = useStyles({ isChecked });
  return (
    <div className={classes.container}>
      {option.image && (
        <div className={classes.imageContainer}>
          <Avatar
            alt={`${option.title}`}
            src={`${local_backend_url}/storage/${option.image.image_link}`}
            style={{ width: "100%", height: "100%" }}
            variant="square"
          />
        </div>
      )}
      {option.title && (
        <div className={classes.textContainer}>
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
    flexDirection: "column",
    justifyContent: "space-between",
    maxWidth: "25vw",
    minWidth: 200,
    height: "100%",
    cursor: "pointer",
    background:
      "transparent linear-gradient(180deg, #995FD4 0%, #1F29356E 100%) 0% 0% no-repeat padding-box",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: "1rem",
    ["@media (max-width: 600px)"]: {
      maxWidth: "100%",
    },
    border: (props: { isChecked: boolean }) => {
      return props.isChecked ? "5px solid #209434" : "none";
    },
  },
  imageContainer: {
    width: "100%",
  },
  textContainer: {
    textAlign: "center",
    padding: "1rem 2rem",
  },
});
