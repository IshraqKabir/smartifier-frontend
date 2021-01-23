import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import IPost from "../../../../Models/IPost";

interface IProps {
  post: IPost;
  position: number;
}

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
    flexDirection: "column",
  },
  topic: {
    color: "white",
    width: 206,
    borderRadius: 10,
    textAlign: "center",
    textTransform: "capitalize",
    paddingBlock: 3,
    backgroundColor: (props: { position: number }) => {
      const { position } = props;
      if (position > colors.length) {
        return colors[position % colors.length];
      }
      return colors[position];
    },
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    paddingInline: 3,
  },
});

const Post: React.FC<IProps> = ({ post, position }) => {
  const classes = useStyles({ position });

  return (
    <div className={classes.container}>
      <div className={classes.topic}>
        <Typography>{post.topic[0].name}</Typography>
      </div>
    </div>
  );
};

export default Post;
