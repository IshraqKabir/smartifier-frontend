import React from "react";

import Image from "material-ui-image";
import { backend_url } from "../../../../../url";
import { Typography, withStyles } from "@material-ui/core";

interface IProps {
  text: string;
}

const PostBodyText: React.FC<IProps> = ({ text }) => {
  return <Text>{text}</Text>;
};

export default PostBodyText;

const Text = withStyles({
  root: {
    lineHeight: 1.6,
    fontSize: 13,
    color: "#686868",
    marginBlock: 5,
  },
})(Typography);
