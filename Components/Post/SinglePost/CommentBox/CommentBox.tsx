import {
  Avatar,
  Box,
  CircularProgress,
  makeStyles,
  Snackbar,
  withStyles,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import useLocalState from "../../../../custom-hooks/useLocalState";

import Image from "next/image";
import axios from "axios";
import { backend_url } from "../../../../url";
import { CommentsCountContext } from "../SinglePost";

interface IProps {
  postId: string;
}

const MAX_CHARACTER_COUNT = 200;

const CommentBox: React.FC<IProps> = ({ postId }) => {
  const [user] = useLocalState("user", "");
  const [comment, setComment] = useState<string>("");
  const [isSending, setIsSending] = useState<boolean>(false);
  const [showLoginAlert, setShowLoginAlert] = useState<boolean>(false);

  const { setCommentsCount } = useContext(CommentsCountContext);

  const classes = useStyles({ comment });

  const handleSubmit = () => {
    if (!user.token) {
      showAlert();
      return;
    }

    if (comment.length > MAX_CHARACTER_COUNT) return;
    if (comment.length == 0) {
      showAlert();
      return;
    }

    postComment();
  };

  const handleChange = (e: any) => {
    setComment(e.target.value);
  };

  const handleEnter = (e: any) => {
    if (e.key === "Enter" && comment.length > 0) {
      handleSubmit();
    }
  };

  const postComment = () => {
    setIsSending(true);
    axios
      .post(
        `${backend_url}/api/post/comment/store`,
        {
          post_id: postId,
          comment: comment,
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
        setCommentsCount((count: number) => count + 1);
        setComment("");
        console.log(response.data);
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
            user.token
              ? "Tell us what you think about this post..."
              : "Login to post a comment!"
          }
          value={comment}
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
        >{`${comment.length}/${MAX_CHARACTER_COUNT}`}</div>
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
        key={postId}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={showLoginAlert}
        message={
          !user.token
            ? "Login To Post A Comment!"
            : comment.length == 0
            ? "Comment Cannot Be Empty"
            : "Some Error Occurred"
        }
      />
    </Container>
  );
};

export default CommentBox;

const Container = withStyles({
  root: {
    width: "100%",
    display: "flex",
    marginTop: "1.5rem",
    alignItems: "center",
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
    color: (props: { comment: string }) => {
      const { comment } = props;
      if (comment.length > MAX_CHARACTER_COUNT) {
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
