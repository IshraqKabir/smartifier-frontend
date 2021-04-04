import { Avatar, Box, withStyles } from "@material-ui/core";
import React, { useContext, useState } from "react";

interface IProps {}

const Replies: React.FC<IProps> = () => {
  const [repliesCount, setRepliesCount] = useState<number>(5);
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

      {repliesCount && (
        <>
          <Number>{repliesCount}</Number>
          <p>{repliesCount > 1 ? "Replies" : "Reply"}</p>
        </>
      )}
    </Button>
  );
};

export default Replies;

const Button = withStyles({
  root: {
    maxWidth: "240px",
    display: "flex",
    alignItems: "center",
    marginRight: "16px",
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
