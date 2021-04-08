import {
  Avatar,
  Box,
  CircularProgress,
  makeStyles,
  Snackbar,
  withStyles,
} from "@material-ui/core";
import React, { useContext, useState } from "react";

import Image from "next/image";
import axios from "axios";
import useLocalState from "../../../../../../../custom-hooks/useLocalState";
import { backend_url } from "../../../../../../../url";
import IPostCommentReply from "../../../../../../../Models/IPostCommentReply";
import IPostComment from "../../../../../../../Models/IPostComment";

interface IProps {
  commentId: string;
  setReplies: Function;
  setComment: Function;
}

const MAX_CHARACTER_COUNT = 200;

const ReplyBox: React.FC<IProps> = ({ commentId, setReplies, setComment }) => {
  const [user] = useLocalState("user", "");
  const [reply, setReply] = useState<string>("");
  const [isSending, setIsSending] = useState<boolean>(false);
  const [showLoginAlert, setShowLoginAlert] = useState<boolean>(false);

  const classes = useStyles({ reply });

  const handleSubmit = () => {
    if (!user.token) {
      showAlert();
      return;
    }

    if (reply.length > MAX_CHARACTER_COUNT) return;
    if (reply.length == 0) {
      showAlert();
      return;
    }

    postReply();
  };

  const handleChange = (e: any) => {
    setReply(e.target.value);
  };

  const handleEnter = (e: any) => {
    if (e.key === "Enter" && reply.length > 0) {
      handleSubmit();
    }
  };

  const postReply = () => {
    setIsSending(true);
    axios
      .post(
        `${backend_url}/api/comment/reply/store`,
        {
          comment_id: commentId,
          comment: reply,
        },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((response) => {
        setIsSending(false);

        setReplies((state: IPostCommentReply[]) => [response.data, ...state]);

        setReply("");
      });
  };

  const showAlert = () => {
    setShowLoginAlert(true);
    setTimeout(() => {
      setShowLoginAlert(false);
    }, 3000);
  };

  return (
    <Container>
      <Avatar
        src={user?.picture}
        style={{
          width: 35,
          height: 35,
          borderRadius: "50%",
          marginRight: "16px",
        }}
      />
      <InputContainer>
        <input
          type="text"
          placeholder={
            user ? "Leave a reply to the comment!" : "Login to post a reply!"
          }
          value={reply}
          onChange={handleChange}
          onKeyDown={handleEnter}
          style={{
            width: "100%",
            padding: "12px",
            marginRight: "16px",
            border: "1px solid black",
          }}
        />
        <div
          className={classes.charactersCount}
        >{`${reply.length}/${MAX_CHARACTER_COUNT}`}</div>
      </InputContainer>
      <ImageContainer>
        {isSending ? (
          <CircularProgress size={25} color="inherit" />
        ) : (
          <Image
            src={`/assets/send_icon.svg`}
            width={25}
            height={25}
            onClick={handleSubmit}
          />
        )}
      </ImageContainer>

      <LoginAlert
        key={commentId}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={showLoginAlert}
        message={
          !user.token
            ? "Login To Post A Reply!"
            : reply.length == 0
            ? "Reply Cannot Be Empty"
            : "Some Error Occurred"
        }
      />
    </Container>
  );
};

export default ReplyBox;

const Container = withStyles({
  root: {
    width: "100%",
    display: "flex",
    marginTop: "1.5rem",
    alignItems: "center",
    marginBottom: "1.5rem",
  },
})(Box);

const ImageContainer = withStyles({
  root: {
    display: "inline-flex",
    width: 35,
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
  },
})(Box);

const InputContainer = withStyles({
  root: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
})(Box);

const useStyles = makeStyles({
  charactersCount: {
    position: "absolute",
    bottom: -22,
    right: 20,
    fontSize: "0.8rem",
    fontWeight: 700,
    color: (props: { reply: string }) => {
      const { reply } = props;
      if (reply.length > MAX_CHARACTER_COUNT) {
        return "red";
      }

      return "grey";
    },
  },
});

const LoginAlert = withStyles({
  root: {
    zIndex: 20000,
  },
})(Snackbar);
