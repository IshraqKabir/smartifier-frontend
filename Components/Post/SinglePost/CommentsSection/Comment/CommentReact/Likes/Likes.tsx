import { Avatar, Box, Snackbar, withStyles } from "@material-ui/core";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import useLocalState from "../../../../../../../custom-hooks/useLocalState";
import useLoginAlert from "../../../../../../../custom-hooks/useLoginAlert";
import { backend_url } from "../../../../../../../url";
import { CommentsContext } from "../../../../SinglePost";

import { CommentContext } from "../../Comment";

interface IProps {}

const Likes: React.FC<IProps> = () => {
  const { comment } = useContext(CommentContext);

  const [user] = useLocalState("user", "");
  const { showLoginAlert, handleClickWhenLoggedOut } = useLoginAlert();
  const [likesCount, setLikesCount] = useState<number>(
    comment.likes_count ? comment.likes_count : 0
  );

  const { likedCommentsIdsByUser, setLikedCommentsIdsByUser } = useContext(
    CommentsContext
  );

  const handleClick = () => {
    if (!user || !user.token) {
      handleClickWhenLoggedOut();
      return;
    }

    if (likedCommentsIdsByUser == "empty") {
      unLikeComment();
      return;
    }

    if (likedCommentsIdsByUser.includes(comment.id)) {
      unLikeComment();
    } else {
      likeComment();
    }
  };

  const likeComment = () => {
    if (user && user.token) {
      axios
        .post(
          `${backend_url}/api/comment/like`,
          {
            comment_id: comment?.id,
          },
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${user.token}`,
            },
          }
        )
        .then((response) => {
          setLikedCommentsIdsByUser((ids) => {
            return [comment.id, ...ids];
          });
          setLikesCount((count) => count + 1);
        });
    }
  };

  const unLikeComment = () => {
    if (user && user.token) {
      axios
        .post(
          `${backend_url}/api/comment/unlike`,
          {
            comment_id: comment?.id,
          },
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${user.token}`,
            },
          }
        )
        .then((response) => {
          setLikedCommentsIdsByUser((ids: number[]) =>
            ids.filter((id) => id != comment.id)
          );
          setLikesCount((count) => count - 1);
        });
    }
  };

  return (
    <Button onClick={handleClick}>
      <Avatar
        src={`https://img.icons8.com/pastel-glyph/34/000000/facebook-like--v1.png`}
        style={{
          width: "23px",
          height: "23px",
          marginRight: "16px",
          alignSelf: "center",
          backgroundColor:
            likedCommentsIdsByUser == "empty"
              ? "lightgrey"
              : likedCommentsIdsByUser.includes(comment.id)
              ? "#2d95b5"
              : "lightgrey",
          borderRadius: "50%",
          padding: "5px",
          cursor: "pointer",
        }}
      />

      <Number>{likesCount}</Number>
      <p>Like{likesCount > 1 ? "s" : ""}</p>
      <LoginAlert
        key={comment.id}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={showLoginAlert}
        message="Please Login To Like The Comment."
      />
    </Button>
  );
};

export default Likes;

const Button = withStyles({
  root: {
    maxWidth: "240px",
    display: "flex",
    alignItems: "center",
    marginRight: "4rem",
    cursor: "pointer",
    margin: "1rem 0rem 0.3rem 0rem",
  },
})(Box);

const Number = withStyles({
  root: {
    display: "inline-block",
    marginRight: 8,
  },
})(Box);

const LoginAlert = withStyles({
  root: {
    zIndex: 20000,
  },
})(Snackbar);
