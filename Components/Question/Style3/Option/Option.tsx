import React from "react";

import { Avatar, Box, Typography, withStyles } from "@material-ui/core";
import IOption from "../../../../Models/IOption";

import { local_backend_url } from "../../../../url";

interface IProps {
  option: IOption;
  position: number;
}

const Option: React.FC<IProps> = ({ option, position }) => {
  return (
    <Container>
      {option.image && (
        <ImageContainer>
          <Avatar
            alt={`${option.title}`}
            src={`${local_backend_url}/storage/${option.image.image_link}`}
            style={{ width: "100%", height: "100%" }}
            variant="square"
          />
        </ImageContainer>
      )}
      {option.title && (
        <TextContainer>
          <OptionButton />
          <Typography>{`${String.fromCharCode(position + 64)}. ${
            option.title
          }`}</Typography>
        </TextContainer>
      )}
    </Container>
  );
};

export default Option;

const Container = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "45%",
    background:
      "transparent linear-gradient(180deg, #995FD4 0%, #1F29356E 100%) 0% 0% no-repeat padding-box",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: "1rem",
    ["@media (max-width: 600px)"]: {
      width: "100%",
    }
  },
})(Box);

const ImageContainer = withStyles({
  root: {
    width: "100%",
  },
})(Box);

const TextContainer = withStyles({
  root: {
    textAlign: "center",
  },
})(Box);

const OptionButton = withStyles({
  root: {},
})(Box);
