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
      <TextContainer>
        <Typography variant="h6">{`${position}.${title}`}</Typography>
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


const TextContainer = withStyles({
  root: { maxWidth: "75ch" },
})(Box);
