import React, { useContext } from "react";

import { Box, Typography, withStyles } from "@material-ui/core";
import IOption from "../../../../Models/IOption";

import Image from "next/image";
import { local_backend_url } from "../../../../url";
import { QuestionContext } from "../../../Questions/Questions";

interface IProps {
  option: IOption;
  position: number;
}

const Option: React.FC<IProps> = ({ option, position }) => {
  const { answerType } = useContext(QuestionContext);

  return (
    <Container>
      {option.image && (
        <ImageContainer>
          <Image
            alt="image"
            src={`${local_backend_url}/storage/${option.image.image_link}`}
            height={"100%"}
            width={"100%"}
            layout="responsive"
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
    alignItems: "center",
    cursor: "pointer",
    margin: "0.3rem 0rem",
    marginBottom: "2rem",
    width: "100%",
    cursor: "pointer",
  },
})(Box);

const ImageContainer = withStyles({
  root: {
    height: 100,
    width: 100,
    borderRadius: 5,
    marginRight: "2rem",
    overflow: "hidden",
    flexShrink: 0,
  },
})(Box);

const TextContainer = withStyles({
  root: {
    background:
      "transparent linear-gradient(180deg, #995FD4 0%, #1F29356E 100%) 0% 0% no-repeat padding-box",
    width: "100%",
    padding: "1rem 1rem",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
  },
})(Box);

const OptionButton = withStyles({
  root: {
    padding: "0.7rem",
    backgroundColor: "#17ABC2",
    borderRadius: "50%",
    overflow: "hidden",
    marginRight: "1rem",
  },
})(Box);
