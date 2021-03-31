import { Box, withStyles } from "@material-ui/core";
import React from "react";

import texts from "../../../../texts/frontpage";

interface IProps {}

const BookACall: React.FC<IProps> = () => {
  return (
    <Container>
      <Title>B2B Free Session</Title>

      <a href={`${texts.links.free_1_hour_session}`} target="_blank">
        <Button>Book Your Free 1-Hour Session</Button>
      </a>
    </Container>
  );
};

export default BookACall;

const Container = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "2rem",
  },
})(Box);

const Title = withStyles({
  root: {
    color: "white",
    fontSize: "1.3rem",
  },
})(Box);

const Button = withStyles({
  root: {
    color: "white",
    backgroundColor: "#0380A7",
    marginTop: "1rem",
    borderRadius: 50,
    padding: "0.5rem 4rem",
    fontSize: "1.4rem",
    cursor: "pointer",
  },
})(Box);
