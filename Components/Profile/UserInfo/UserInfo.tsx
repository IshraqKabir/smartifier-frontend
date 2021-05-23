import { Avatar, Box, makeStyles, withStyles } from "@material-ui/core";
import React from "react";
import useLocalState from "../../../custom-hooks/useLocalState";

interface IProps {}

const UserInfo: React.FC<IProps> = () => {
  const [user] = useLocalState("user", "");

  const classes = useStyles();

  return (
    <Container>
      <ProfilePicContainer>
        <Avatar
          alt={`${user?.name}`}
          src={`${user?.picture}`}
          style={{ width: "100%", height: "100%" }}
        />
      </ProfilePicContainer>
      <div className={classes.userName}>{user?.name?.toLowerCase()}</div>
    </Container>
  );
};

export default UserInfo;

const Container = withStyles({
  root: {
    background: "rgba(212, 224, 223, 0.6)",
    width: "100%",
    marginTop: "3rem",
    marginBottom: "3rem",
    display: "flex",
    alignItems: "center",
    padding: "4rem 4rem",
    borderRadius: 5,
    ["@media (max-width: 600px)"]: {
      padding: "1rem 1rem",
    },
  },
})(Box);

const ProfilePicContainer = withStyles({
  root: {
    borderRadius: "50%",
    overflow: "hidden",
    height: 100,
    width: 100,
    flexShrink: 0,
    ["@media (max-width: 600px)"]: {
      height: 100,
      width: 100,
    },
  },
})(Box);

const useStyles = makeStyles({
  userName: {
    textTransform: "capitalize",
    color: "#252525C7",
    fontSize: "1.5rem",
    fontWeight: 800,
    marginLeft: "1rem",
    whiteSpace: "nowrap",
    ["@media (max-width: 600px)"]: {
      fontSize: "1rem",
    },
  },
});
