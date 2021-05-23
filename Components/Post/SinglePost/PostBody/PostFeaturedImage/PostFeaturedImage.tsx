import React from "react";

import Image from "material-ui-image";
import { backend_url } from "../../../../../url";
import { Avatar, makeStyles, Typography, withStyles } from "@material-ui/core";

interface IProps {
  src: string;
  caption?: string;
}

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBlock: 50,
    ["@media (max-width: 500px)"]: {
      marginBlock: 25,
    },
  },
  imageContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const PostFeaturedImage: React.FC<IProps> = ({ src, caption }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Avatar
          src={`${backend_url}${src}`}
          alt={caption}
          style={{ width: "100%", height: "100%" }}
          variant="square"
        />
      </div>
      {caption ? <Caption>Caption: {caption}</Caption> : null}
    </div>
  );
};

export default PostFeaturedImage;

const Caption = withStyles({
  root: {
    fontSize: 12,
    color: "#686868",
    marginTop: 5,
  },
})(Typography);
