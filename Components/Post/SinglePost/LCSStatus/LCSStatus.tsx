import { Avatar, Box, withStyles } from "@material-ui/core";
import React from "react";
import IPost from "../../../../Models/IPost";
import Comments from "./Comments/Comments";
import Likes from "./Likes/Likes";

interface IProps {
  post: IPost;
}

const LCSStatus: React.FC<IProps> = ({ post }) => {
  return (
    <Container>
      {/* <Comments /> */}
      <Button>
        <Likes post={post} />
      </Button>
    </Container>
  );
};

export default LCSStatus;

const imageStyle = {
  width: "23px",
  height: "23px",
  marginRight: "16px",
  alignSelf: "center",
  backgroundColor: "lightgray",
  borderRadius: "50%",
  padding: "5px",
  cursor: "pointer",
};

const Container = withStyles({
  root: {
    width: "100%",
    padding: "8px 0",
    borderTop: "1px solid black",
    borderBottom: "1px solid black",
    margin: "16px",
    display: "flex",
    justifyContent: "space-between",
    color: "#808080",
  },
})(Box);

const Button = withStyles({
  root: {
    maxWidth: "240px",
    display: "flex",
    alignItems: "center",
    marginRight: "16px",
  },
})(Box);

const Number = withStyles({
  root: {
    display: "inline-block",
    marginRight: 8,
  },
})(Box);
