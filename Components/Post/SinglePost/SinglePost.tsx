import React, { createContext, useEffect, useState } from "react";
import { Divider, makeStyles, Typography, withStyles } from "@material-ui/core";
import IPost from "../../../Models/IPost";
import Tags from "./Tags/Tags";
import PostBody from "./PostBody/PostBody";
import PostFeaturedImage from "./PostBody/PostFeaturedImage/PostFeaturedImage";

import Link from "next/link";
import LCSStatus from "./LCSStatus/LCSStatus";
import CommentBox from "./CommentBox/CommentBox";
import CommentsSection from "./CommentsSection/CommentsSection";
import axios from "axios";
import { backend_url } from "../../../url";
import IPostComment from "../../../Models/IPostComment";

interface IProps {
  post: IPost;
}

export const CommentsCountContext = createContext(null);
export const CommentsContext = createContext(null);

const Post: React.FC<IProps> = ({ post }) => {
  const [commentsCount, setCommentsCount] = useState<number>(
    post?.comments_count
  );

  const [comments, setComments] = useState<[] | IPostComment[]>([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = () => {
    axios
      .get(`${backend_url}/api/posts/${post.id}/comments`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        setComments(response.data);
      });
  };

  const classes = useStyles();

  const postDate = new Date(post.created_at);

  return (
    <div className={classes.container}>
      {post?.topic && (
        <Link href={`/blog/topics/${post?.topic[0]?.slug}/posts`}>
          <a>
            <div className={classes.topic}>
              <TopicName>{post?.topic[0]?.name}</TopicName>
            </div>
          </a>
        </Link>
      )}
      <div>
        <div className={classes.postTitle}>
          <PostTitle>{post?.title}</PostTitle>
          <PostAuthor variant="subtitle2">by {post?.user?.name}</PostAuthor>
        </div>
        <div>
          <PostDate variant="caption">
            {`${
              monthNames[postDate.getMonth()]
            } ${postDate.getDate()} ${postDate.getFullYear()}`}{" "}
            . {post?.read_time}
          </PostDate>
        </div>
        {post?.featured_image ? (
          <PostFeaturedImage
            src={post?.featured_image}
            caption={post?.featured_image_caption}
          />
        ) : null}
        <PostBody body={post?.body} />
      </div>
      <div className={classes.bottomContainer}>
        {post.tags ? <Tags tags={post.tags} /> : null}
        <ReadTime variant="subtitle2">{post?.read_time}</ReadTime>
      </div>

      <CommentsCountContext.Provider
        value={{
          commentsCount: commentsCount,
          setCommentsCount: setCommentsCount,
        }}
      >
        <LCSStatus post={post} />
        <CommentsContext.Provider
          value={{
            comments: comments,
            setComments: setComments,
          }}
        >
          <CommentBox postId={post.id} />
          <CommentsSection />
        </CommentsContext.Provider>
      </CommentsCountContext.Provider>
    </div>
  );
};

export default Post;

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
    backgroundColor: () => {
      return colors[0];
    },
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    paddingLeft: 3,
    paddingRight: 3,
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

const TopicName = withStyles({
  root: {
    fontSize: 13,
  },
})(Typography);

const PostTitle = withStyles({
  root: {
    color: "#3798A7",
    fontSize: 22,
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

const colors: string[] = [
  "#97A5B8",
  "#9C95FD",
  "#F493FF",
  "#28E36E",
  "#FFE533",
];

const monthNames = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
