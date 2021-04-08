import { Avatar, Box, Typography, withStyles } from "@material-ui/core";
import React from "react";
import ShareLink from "react-facebook-share-link";

interface IProps {
  link: string;
  title: string;
}

const ShareOnFB: React.FC<IProps> = ({ link, title }) => {
  return (
    <>
      <ShareLink link={`${link}`}>
        {(link: string) => (
          <a
            href={`${link}`}
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
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
              <Typography variant="caption">{title}</Typography>
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
