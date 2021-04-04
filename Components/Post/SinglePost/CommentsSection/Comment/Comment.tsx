import { Avatar, Box, withStyles } from "@material-ui/core";
import React, { createContext } from "react";
import IPostComment from "../../../../../Models/IPostComment";
import CommentReact from "./CommentReact/CommentReact";

interface IProps {
  comment: IPostComment;
}

export const CommentContext = createContext(null);

const Comment: React.FC<IProps> = ({ comment }) => {

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
          <UserName>{comment?.user?.name}</UserName>
          <CommentText>{comment?.comment}</CommentText>
        </CommentTextContaier>
      </CommentContainer>
      <CommentContext.Provider value={{ comment: comment }}>
        <CommentReact />
      </CommentContext.Provider>
    </Container>
  );
};

export default Comment;

const Container = withStyles({
  root: {
    borderBottom: "1px solid grey",
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
  },
})(Box);

const CommentText = withStyles({
  root: {
    lineHeight: 1.6,
  },
})(Box);
