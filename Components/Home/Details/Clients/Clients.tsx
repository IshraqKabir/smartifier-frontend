import { Avatar, Box, withStyles } from "@material-ui/core";
import React from "react";

import texts from "../../../../texts/frontpage";

interface IProps {}

const Clients: React.FC<IProps> = () => {
  return (
    <Container>
      <Title>Join our community of clients</Title>
      <ImagesList>
        {texts.clients.map((image_link) => {
          return (
            <Avatar
              src={image_link}
              style={{
                width: 190,
                height: "100%",
                margin: "2rem 1rem 0rem 1rem",
              }}
              variant="square"
            />
          );
        })}
      </ImagesList>
    </Container>
  );
};

export default Clients;

const Container = withStyles({
  root: {
    margin: "2rem 5%",
    border: "2px solid white",
    color: "black",
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    padding: "2rem 0rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
})(Box);

const Title = withStyles({
  root: {
    fontSize: "1.5rem",
    fontWeight: 400,
    marginBottom: "2rem",
  },
})(Box);

const ImagesList = withStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    ["@media (max-width: 800px)"]: {
      justifyContent: "center",
    },
  },
})(Box);
