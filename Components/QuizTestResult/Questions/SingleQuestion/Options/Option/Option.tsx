import {
  Avatar,
  Box,
  makeStyles,
  Typography,
  withStyles,
} from "@material-ui/core";
import { CheckCircleOutlined } from "@material-ui/icons";
import React from "react";
import { backend_url } from "../../../../../../url";

interface IProps {
  option: any;
}

export default function Option({ option }: IProps) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <TickContainer>
        <CheckCircleOutlined color="inherit" />
      </TickContainer>
      <div className={classes.titleAndImageContainer}>
        {option?.title && <Title>{option?.title}</Title>}
        {option?.image?.image_link && (
          <Avatar
            src={`${backend_url}/storage/${option?.image?.image_link}`}
            variant="square"
            style={{ height: 200, width: 200, margin: "0.2rem 0" }}
          />
        )}
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  container: {
    borderTop: "1px solid gray",
    padding: "0.1rem 0rem",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    width: "100%",
  },
  titleAndImageContainer: {
    width: "100%",
    padding: "0.5rem 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

const Title = withStyles({
  root: {},
})(Typography);

const TickContainer = withStyles({
  root: {
    color: "green",
  },
})(Box);
