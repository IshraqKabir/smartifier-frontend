import React from "react";

import Image from "material-ui-image";
import { backend_url } from "../../../../../url";
import { makeStyles, Typography, withStyles } from "@material-ui/core";

interface IProps {
  src: string;
  caption?: string;
  isWide: boolean;
}

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    marginBlock: 50,
    ["@media (max-width: 500px)"]: {
      marginBloc: 25,
    },
  },
  imageContainer: {
    width: "60%",
    paddingTop: "100%",
    marginTop: "-100%",
    paddingBlock: "auto",
    ["@media (max-width: 500px)"]: {
      width: "100%",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

const PostBodyImage: React.FC<IProps> = ({ src, caption, isWide }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Image
          src={`${backend_url}${src}`}
          alt={caption}
          style={{ width: "100%", height: "100%" }}
        />
        {caption ? <Caption>Caption: {caption}</Caption> : null}
      </div>
    </div>
  );
};

export default PostBodyImage;

const Caption = withStyles({
  root: {
    fontSize: 12,
    color: "#686868",
    marginTop: 5,
  },
})(Typography);
