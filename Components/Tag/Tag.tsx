import { makeStyles, Typography, withStyles } from "@material-ui/core";
import React from "react";
import ITag from "../../Models/ITag";

import Link from "next/link";

interface IProps {
  tag: ITag;
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
    borderRadius: 15,
    backgroundColor: (props: { position: number }) => {
      const { position } = props;
      if (position > colors.length) {
        return colors[position % colors.length];
      }
      return colors[position];
    },
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    color: "white",
    marginRight: 10,
    textTransform: "capitalize",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

const Tag: React.FC<IProps> = ({ tag, position }) => {
  const classes = useStyles({ position });

  return (
    <div className={classes.container}>
      <Link href={`/blog/tags/${tag.slug}/posts`}>
        <a>
          <TagName variant="caption">{tag.name}</TagName>
        </a>
      </Link>
    </div>
  );
};

export default Tag;

const TagName = withStyles({
  root: {},
})(Typography);
