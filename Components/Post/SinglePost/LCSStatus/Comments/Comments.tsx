import { Avatar, Box, withStyles } from "@material-ui/core";
import React, { useState } from "react";
import IPost from "../../../../../Models/IPost";

interface IProps {
  post: IPost;
}

const Comments: React.FC<IProps> = ({ post }) => {
  const [commentsCount, setCommentsCount] = useState<number>(
    post?.comments_count
  );

  const handleClick = () => {};

  return (
    <Button onClick={handleClick}>
      <Avatar
        src={`https://img.icons8.com/fluent-systems-regular/34/000000/comments--v2.png`}
        style={{
          width: "23px",
          height: "23px",
          marginRight: "16px",
          alignSelf: "center",
          backgroundColor: "lightgrey",
          borderRadius: "50%",
          padding: "5px",
          cursor: "pointer",
        }}
      />

      {post.likes_count ? (
        <>
          <Number>{commentsCount}</Number>
          <p>Comment{commentsCount > 1 ? "s" : ""}</p>
        </>
      ) : (
        <>
          <Number>0</Number>
          <p>Comment</p>
        </>
      )}
    </Button>
  );
};

export default Comments;

const Button = withStyles({
  root: {
    maxWidth: "240px",
    display: "flex",
    alignItems: "center",
    marginRight: "16px",
    cursor: "pointer",
  },
})(Box);

const Number = withStyles({
  root: {
    display: "inline-block",
    marginRight: 8,
  },
})(Box);
