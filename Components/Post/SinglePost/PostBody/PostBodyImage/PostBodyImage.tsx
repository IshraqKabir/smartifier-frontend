import React from "react";

import Image from "material-ui-image";
import { backend_url } from "../../../../../url";
import { makeStyles } from "@material-ui/core";

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
  },
  imageContainer: {
    width: "60%",
    paddingTop: "100%",
    marginTop: "-100%",
    paddingBlock: "auto",
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
      </div>
    </div>
  );
};

export default PostBodyImage;
