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
  isAssessment: boolean;
}

export default function Badge({ testId, isAssessment }: IProps) {
  const { isLoading, error, badgeImageLink, getHeight, getWidth } = useBadge(
    testId,
    isAssessment
  );

  return (
    <Container>
      <Title variant="h5">
        {isAssessment ? "Assessment Certificate" : "Quiz Badge"}{" "}
      </Title>
      <Divider />
      {isLoading && (
        <LoadingContainer>
          <CircularProgress />
          <Typography variant="subtitle1">
            {`Getting Your ${
              isAssessment ? "Certificate" : "Badge"
            } Ready. Please Wait.`}
          </Typography>
        </LoadingContainer>
      )}

      {!isLoading && badgeImageLink && (
        <ImageContainer>
          <Avatar
            src={`${backend_url}/storage/${badgeImageLink}`}
            variant="square"
            style={{
              width: getWidth(),
              height: getHeight(),
            }}
          />
          <FBShareContainer>
            <ShareOnFB
              title={`Share Your ${
                isAssessment ? "Certificate" : "Badge"
              } On Facebook`}
              link={`${url}/share/fb/badge/${testId}`}
              color="black"
              variant="subtitle1"
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
    marginTop: "2rem",
    position: "relative",
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
    marginBottom: "2rem",
  },
})(Box);

const FBShareContainer = withStyles({
  root: {
    color: "black",
    fontSize: "1rem",
    position: "absolute",
    right: "0.5rem",
    bottom: "0.5rem",
  },
})(Box);
