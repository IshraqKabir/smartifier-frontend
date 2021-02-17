import React from "react";

import { makeStyles, Typography } from "@material-ui/core";
import IOption from "../../../../Models/IOption";

import Image from "next/image";
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
          <Image
            alt="image"
            src={`${local_backend_url}/storage/${option.image.image_link}`}
            height={"100%"}
            width={"100%"}
            layout="responsive"
          />
        </div>
      )}
      {option.title && (
        <div className={classes.textContainer}>
          <div className={classes.optionButton} />
          <Typography>
            {`${String.fromCharCode(position + 64)}. ${option.title}`}
          </Typography>
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
    marginBottom: "1rem",
    cursor: "pointer",
  },
  imageContainer: {
    height: 120,
    width: 120,
    borderRadius: 5,
    marginRight: "2rem",
    overflow: "hidden",
    flexShrink: 0,
    border: (props: { isChecked: boolean }) => {
      return props.isChecked ? "5px solid #209434" : "none";
    },
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
