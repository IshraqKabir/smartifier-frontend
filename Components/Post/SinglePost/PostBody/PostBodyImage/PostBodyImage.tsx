import React from "react";

import Image from "material-ui-image";
import { backend_url } from "../../../../../url";
import { Avatar, makeStyles, Typography, withStyles } from "@material-ui/core";

interface IProps {
  src: string;
  caption?: string;
  isWide: boolean;
}

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBlock: 50,
    ["@media (max-width: 500px)"]: {
      marginBlock: 25,
    },
  },
  imageContainer: {
    width: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const PostBodyImage: React.FC<IProps> = ({ src, caption, isWide }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Avatar
          src={`${backend_url}${src}`}
          alt={caption}
          variant="square"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      {caption ? <Caption>Caption: {caption}</Caption> : null}
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
