import React from "react";
import {
  Box,
  Divider,
  makeStyles,
  Typography,
  withStyles,
} from "@material-ui/core";
import IPost from "../../../../Models/IPost";
import Tags from "./Tags/Tags";

import Link from "next/link";

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
    width: "100%",
  },
  topic: {
    color: "white",
    cursor: "pointer",
    width: 150,
    borderRadius: 10,
    textAlign: "center",
    textTransform: "capitalize",
    paddingTop: 3,
    paddingBottom: 3,
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
    paddingLeft: 3,
    paddingRight: 3,
    "&:hover": {
      textDecoration: "underline",
    },
  },
  postTitle: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  bottomContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
});

const Post: React.FC<IProps> = ({ post, position }) => {
  const classes = useStyles({ position });

  return (
    <Container>
      <Link href={`/blog/topics/${post?.topic[0]?.slug}/posts`}>
        <a>
          <div className={classes.topic}>
            <TopicName variant="subtitle2">{post?.topic[0]?.name}</TopicName>
          </div>
        </a>
      </Link>
      <div>
        <div className={classes.postTitle}>
          <Link href={`/blog/posts/${post?.slug}`}>
            <a>
              <PostTitle variant="h5">{post?.title}</PostTitle>
            </a>
          </Link>
          <PostAuthor variant="subtitle2">by {post?.user?.name}</PostAuthor>
        </div>
        <div>
          <PostSummary>{`${post?.summary?.substr(
            0,
            200
          )}[...][...]`}</PostSummary>
        </div>
      </div>
      <div className={classes.bottomContainer}>
        {post.tags ? <Tags tags={post.tags} /> : null}
        <ReadTime variant="subtitle2">{post.read_time}</ReadTime>
      </div>
      <PostDivider />
    </Container>
  );
};

export default Post;

const Container = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
})(Box);

const TopicName = withStyles({
  root: {},
})(Typography);

const PostTitle = withStyles({
  root: {
    color: "#3798A7",
    marginTop: 10,
    marginBottom: 10,
    whiteSpace: "nowrap",
    textTransform: "capitalize",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
})(Typography);

const PostSummary = withStyles({
  root: {
    color: "#686868",
    lineHeight: 1.5,
    textTransform: "capitalize",
    cursor: "pointer",
    paddingRight: "10%",
  },
})(Typography);

const PostAuthor = withStyles({
  root: {
    whiteSpace: "nowrap",
    color: "#C5C5C5",
    marginLeft: "auto",
    marginTop: 10,
  },
})(Typography);

const ReadTime = withStyles({
  root: {
    whiteSpace: "nowrap",
    color: "#C5C5C5",
    marginLeft: "auto",
    marginTop: 10,
  },
})(Typography);

const PostDivider = withStyles({
  root: {
    marginTop: 10,
    marginBottom: 20,
  },
})(Divider);
