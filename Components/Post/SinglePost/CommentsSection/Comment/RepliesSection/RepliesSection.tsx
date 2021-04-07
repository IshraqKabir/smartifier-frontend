import { Box, withStyles } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import IPostCommentReply from "../../../../../../Models/IPostCommentReply";
import { CommentContext } from "../Comment";
import Reply from "./Reply/Reply";
import ReplyBox from "./ReplyBox/ReplyBox";

interface IProps {}

const RepliesSection: React.FC<IProps> = ({}) => {
  const { comment, setComment, setRepliesCount } = useContext(CommentContext);
  const [replies, setReplies] = useState<IPostCommentReply[]>(
    comment?.replies ? comment?.replies : []
  );

  useEffect(() => {
    setComment((state) => {
      const comment = { ...state };
      comment.replies = [];
      comment.replies = [...replies];
      return comment;
    });

    setRepliesCount(replies.length);
  }, [replies]);

  return (
    <Container>
      <ReplyBox
        commentId={comment?.id}
        setReplies={setReplies}
        setComment={setComment}
      />
      {replies &&
        replies.map((reply: IPostCommentReply) => {
          return <Reply key={reply.id} reply={reply} />;
        })}
    </Container>
  );
};

export default RepliesSection;

const Container = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    borderBottom: "1px solid grey",
    paddingBottom: "0.5rem",
    paddingLeft: "5rem",
  },
})(Box);
