import { Avatar, Box, Snackbar, withStyles } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useLocalState from "../../../../../custom-hooks/useLocalState";
import useLoginAlert from "../../../../../custom-hooks/useLoginAlert";
import IPost from "../../../../../Models/IPost";
import { backend_url } from "../../../../../url";

interface IProps {
  post: IPost;
}

const Likes: React.FC<IProps> = ({ post }) => {
  const [user] = useLocalState("user", "");
  const { showLoginAlert, handleClickWhenLoggedOut } = useLoginAlert();
  const [isLikedByUser, setIsLikedByUser] = useState<boolean>(false);
  const [likesCount, setLikesCount] = useState<number>(
    post?.likes_count ? post?.likes_count : 0
  );

  const handleClick = () => {
    if (!user || !user.token) {
      handleClickWhenLoggedOut();
      return;
    }

    if (isLikedByUser) {
      unLikePost();
    } else {
      likePost();
    }
  };

  useEffect(() => {
    getHasUserLikedThePost();
  }, []);

  useEffect(() => {
    getHasUserLikedThePost();
    if (!user || !user.token) setIsLikedByUser(false);
  }, [user]);

  const getHasUserLikedThePost = () => {
    if (user && user.token) {
      axios
        .get(`${backend_url}/api/posts/${post?.slug}/is-liked-by-user`, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((response) => {
          setIsLikedByUser(response.data.is_liked_by_user);
        });
    }
  };

  const likePost = () => {
    if (user && user.token) {
      axios
        .post(
          `${backend_url}/api/post/like`,
          {
            post_id: post?.id,
          },
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${user.token}`,
            },
          }
        )
        .then((response) => {
          setIsLikedByUser(true);
          setLikesCount((count) => count + 1);
        });
    }
  };

  const unLikePost = () => {
    if (user && user.token) {
      axios
        .post(
          `${backend_url}/api/post/unlike`,
          {
            post_id: post?.id,
          },
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${user.token}`,
            },
          }
        )
        .then((response) => {
          setIsLikedByUser(false);
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
          backgroundColor: isLikedByUser ? "#2d95b5" : "lightgrey",
          borderRadius: "50%",
          padding: "5px",
          cursor: "pointer",
        }}
      />

      <Number>{likesCount}</Number>
      <p>Like{likesCount > 1 ? "s" : ""}</p>

      <LoginAlert
        key={post.id}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={showLoginAlert}
        message="Please Login To Like The Post."
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
