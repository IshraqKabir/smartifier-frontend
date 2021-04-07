import { Avatar, Box, withStyles } from "@material-ui/core";
import React from "react";
import IPostCommentReply from "../../../../../../../Models/IPostCommentReply";

interface IProps {
  reply: IPostCommentReply;
}

const Reply: React.FC<IProps> = ({ reply }) => {
  return (
    <Container>
      <Avatar
        src={`${reply?.user?.image_url}`}
        style={{
          height: 35,
          width: 35,
          borderRadius: "50%",
          marginRight: "16px",
        }}
      />
      <ReplyTextContainer>
        <UserName>{reply?.user?.name.toLowerCase()}</UserName>
        <ReplyText>{reply?.comment}</ReplyText>
      </ReplyTextContainer>
    </Container>
  );
};

export default Reply;

const Container = withStyles({
  root: {
    marginTop: "1rem",
    display: "flex",
    alignItems: "center",
    color: "#808080",
  },
})(Box);

const ReplyTextContainer = withStyles({
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

const ReplyText = withStyles({
  root: {
    lineHeight: 1.6,
  },
})(Box);
