import { Avatar, Box, Typography, withStyles } from "@material-ui/core";
import React from "react";
import ShareLink from "react-facebook-share-link";

interface IProps {
  link: string;
  title: string;
  color: string;
  variant?: "caption" | "subtitle1" | "subtitle2" | "h6";
}

const ShareOnFB: React.FC<IProps> = ({
  link,
  title,
  color,
  variant = "caption",
}) => {
  return (
    <>
      <ShareLink link={`${link}`}>
        {(link: string) => (
          <a
            href={`${link}`}
            target="_blank"
            style={{ textDecoration: "none", color: color }}
          >
            <Container>
              <Avatar
                src={`/assets/facebook.png`}
                variant="square"
                style={{
                  height: 25,
                  width: 25,
                  marginRight: 5,
                  marginBottom: "auto",
                }}
              />
              <Typography variant={variant} color="inherit">
                {title}
              </Typography>
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
  },
})(Box);
