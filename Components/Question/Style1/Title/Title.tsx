import { Box, Typography, withStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import IImage from "../../../../Models/IImage";

import Image from "next/image";
import { backend_url, local_backend_url } from "../../../../url";

interface IProps {
  title: string;
  image: IImage;
  position: number;
}

const Title: React.FC<IProps> = ({ title, image, position }) => {
  return (
    <Container>
      {image && (
        <ImageContainer>
          <Image
            alt="image"
            src={`${local_backend_url}/storage/${image.image_link}`}
            height={"100%"}
            width={"100%"}
            layout="responsive"
          />
        </ImageContainer>
      )}
      <TextContainer>
        <Typography>{`${position}.${title}`}</Typography>
      </TextContainer>
    </Container>
  );
};

export default Title;

const Container = withStyles({
  root: {
    width: "100%",
    display: "flex",
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
  root: { maxWidth: "75ch" },
})(Box);
