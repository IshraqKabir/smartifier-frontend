import {
  Avatar,
  Box,
  CircularProgress,
  Typography,
  withStyles,
} from "@material-ui/core";
import React from "react";
import url, { backend_url } from "../../../url";
import ShareOnFB from "../../ShareOnFB/ShareOnFB";
import useBadge from "./useBadge";

interface IProps {
  testId: number;
}

export default function Badge({ testId }: IProps) {
  const { isLoading, error, badgeImageLink } = useBadge(testId);

  return (
    <Container>
      <Title variant="h5">Quiz Badge</Title>
      <Divider />
      {isLoading && (
        <LoadingContainer>
          <CircularProgress />
          <Typography variant="subtitle1">
            Getting Your Badge Ready. Please wait.
          </Typography>
        </LoadingContainer>
      )}

      {!isLoading && badgeImageLink && (
        <ImageContainer>
          <Avatar
            src={`${backend_url}/storage/${badgeImageLink}`}
            variant="square"
            style={{ width: "min(450px, 95%)", height: "100%" }}
          />
          <FBShareContainer>
            <ShareOnFB
              title={`Share Your Badge On Facebook`}
              link={`${url}/share/fb/badge/${testId}`}
              color="black"
            />
          </FBShareContainer>
        </ImageContainer>
      )}

      {!isLoading && error && (
        <Typography variant="subtitle1" color="error">
          {error}
        </Typography>
      )}
    </Container>
  );
}

const Container = withStyles({
  root: {
    width: "100%",
    border: "1px solid #e6e6e4",
    borderRadius: "7px 7px 0px 0px",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "1rem",
  },
})(Box);

const LoadingContainer = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
  },
})(Box);

const Title = withStyles({
  root: {
    padding: "0.7rem",
    textTransform: "capitalize",
  },
})(Typography);

const Divider = withStyles({
  root: {
    width: "100%",
    height: 2,
    backgroundColor: "#e6e6e4",
  },
})(Box);

const ImageContainer = withStyles({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
    padding: "1rem 0",
  },
})(Box);

const FBShareContainer = withStyles({
  root: {
    margin: "1rem",
    color: "black",
    fontSize: "1rem",
  },
})(Box);
