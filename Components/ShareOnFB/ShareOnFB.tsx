import { Avatar, Box, Typography, withStyles } from "@material-ui/core";
import React from "react";
import ShareLink from "react-facebook-share-link";

interface IProps {
  link: string;
}

const ShareOnFB: React.FC<IProps> = ({ link }) => {
  return (
    <>
      <ShareLink link={`${link}`}>
        {(link: string) => (
          <a href={`${link}`} target="_blank">
            <Container>
              <Avatar
                src={`/assets/facebook.png`}
                variant="square"
                style={{
                  height: 18,
                  width: 18,
                  marginRight: 5,
                  marginBottom: "auto",
                }}
              />
              <Typography variant="caption">Share this on Facebook</Typography>
            </Container>
          </a>
        )}
      </ShareLink>
    </>
  );
};

export default ShareOnFB;

const Container = withStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    color: "inherit",
  },
})(Box);