import React from "react";
import { Divider, makeStyles, Typography, withStyles } from "@material-ui/core";
import IPost from "../../../Models/IPost";
import Tags from "./Tags/Tags";
import PostBody from "./PostBody/PostBody";
import PostFeaturedImage from "./PostBody/PostFeaturedImage/PostFeaturedImage";

interface IProps {
  post: IPost;
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
    paddingBlock: 3,
    backgroundColor: () => {
      return colors[0];
    },
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    paddingInline: 3,
    marginBottom: 10,
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

const Post: React.FC<IProps> = ({ post }) => {
  const classes = useStyles();

  const postDate = new Date();

  return (
    <div className={classes.container}>
      <div className={classes.topic}>
        <TopicName>{post.topic[0].name}</TopicName>
      </div>
      <div>
        <div className={classes.postTitle}>
          <PostTitle>{post.title}</PostTitle>
          <PostAuthor variant="subtitle2">by {post.user.name}</PostAuthor>
        </div>
        <div>
          <PostDate variant="caption">{postDate.toDateString()} . {post.read_time}</PostDate>
        </div>
        {post.featured_image ? (
          <PostFeaturedImage
            src={post.featured_image}
            caption={post.featured_image_caption}
          />
        ) : null}
        <PostBody body={post.body} />
      </div>
      <div className={classes.bottomContainer}>
        {post.tags ? <Tags tags={post.tags} /> : null}
        <ReadTime variant="subtitle2">{post.read_time}</ReadTime>
      </div>
      <PostDivider />
    </div>
  );
};

export default Post;

const TopicName = withStyles({
  root: {
    fontSize: 13,
  },
})(Typography);

const PostTitle = withStyles({
  root: {
    color: "#3798A7",
    fontSize: 22,
    // marginBlock: 10,
    whiteSpace: "nowrap",
    textTransform: "capitalize",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
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

const PostDate = withStyles({
  root: {
    color: "#C5C5C5",
    fontWeight: "bold",
  },
})(Typography);
