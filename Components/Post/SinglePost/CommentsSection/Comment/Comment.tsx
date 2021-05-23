import { Avatar, Box, withStyles } from "@material-ui/core";
import React, { createContext, useState } from "react";
import IPostComment from "../../../../../Models/IPostComment";
import CommentReact from "./CommentReact/CommentReact";
import RepliesSection from "./RepliesSection/RepliesSection";

interface IProps {
  commentProp: IPostComment;
}

export const CommentContext = createContext(null);

const Comment: React.FC<IProps> = ({ commentProp }) => {
  const [showReply, setShowReply] = useState<boolean>(false);

  const [comment, setComment] = useState<IPostComment>(commentProp);
  const [repliesCount, setRepliesCount] = useState<number>(
    comment?.replies_count ? comment?.replies_count : 0
  );

  return (
    <Container>
      <CommentContainer>
        <Avatar
          src={`${comment?.user.image_url}`}
          style={{
            height: 35,
            width: 35,
            borderRadius: "50%",
            marginRight: "16px",
          }}
        />
        <CommentTextContaier>
          <UserName>{comment?.user?.name.toLocaleLowerCase()}</UserName>
          <CommentText>{comment?.comment}</CommentText>
        </CommentTextContaier>
      </CommentContainer>
      <CommentContext.Provider
        value={{
          comment: comment,
          setComment: setComment,
          setShowReply: setShowReply,
          repliesCount: repliesCount,
          setRepliesCount: setRepliesCount,
        }}
      >
        <CommentReact />
        {showReply && <RepliesSection />}
      </CommentContext.Provider>
    </Container>
  );
};
export default Comment;

const Container = withStyles({
  root: {
    // borderBottom: "1px solid grey",
    padding: "0rem 0rem 2rem 0rem",
  },
})(Box);

const CommentContainer = withStyles({
  root: {
    marginTop: "1rem",
    display: "flex",
    alignItems: "center",
    color: "#808080",
  },
})(Box);

const CommentTextContaier = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
})(Box);

const UserName = withStyles({
  root: {
    fontWeight: 700,
    textTransform: "capitalize",
  },
})(Box);

const CommentText = withStyles({
  root: {
    lineHeight: 1.6,
  },
})(Box);
