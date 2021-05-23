import { Avatar, Box, withStyles } from "@material-ui/core";
import React from "react";

interface IProps {}

const FindUsOnFB: React.FC<IProps> = () => {
  return (
    <a href="https://www.facebook.com/smartifier.org/" target="_blank">
      <Container>
        <Avatar
          src={`/assets/facebook.png`}
          variant="square"
          style={{
            height: 18,
            width: 18,
            marginLeft: 15,
            marginRight: 20,
          }}
        />
        <div>Find us on Facebook, we talk to everyone</div>
      </Container>
    </a>
  );
};

export default FindUsOnFB;

const Container = withStyles({
  root: {
    background: "#0380A7D4",
    padding: "1rem 4rem 1rem 1.5rem",
    margin: "0rem 5%",
    cursor: "pointer",
    color: "white",
    marginTop: "2rem",
    borderRadius: 50,
    display: "inline-flex",
    alignItems: "center",
    fontWeight: 400,
    fontSize: "1.2rem",
  },
})(Box);
