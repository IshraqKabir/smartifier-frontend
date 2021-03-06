import React, { useState } from "react";
import useLocalState from "../../../../../../../custom-hooks/useLocalState";

import {
  Avatar,
  Box,
  Collapse,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
  withStyles,
} from "@material-ui/core";

import { ExpandLess, ExpandMore } from "@material-ui/icons";

import Link from "next/link";

const useStyles = makeStyles({
  userContainer: {
    whiteSpace: "nowrap",
    textTransform: "capitalize",
    color: "#3798A7",
    height: "auto",
    width: "auto",
    position: "relative",
  },
  profilePic: {
    borderRadius: "50%",
    overflow: "hidden",
    height: 40,
    width: 40,
    display: "flex",
    alignItems: "center",
  },
  userName: {
    textTransform: "capitalize",
    color: "white",
    marginLeft: 5,
    marginRight: 5,
  },
  arrow: {
    color: "#3798A7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  linkText: {
    color: "white",
    "&:hover": {
      color: "#3798A7",
    },
  },
});

const User: React.FC<{}> = () => {
  const [user, setUser] = useLocalState<any>("user", "");
  const [open, setOpen] = useState<boolean>(false);

  const classes = useStyles();

  const handleClick = () => {
    setOpen(!open);
  };

  if (!user) return <></>;

  const logOut = () => {
    setUser("");
    location.reload();
  };

  console.log(user);
  return (
    <div className={classes.userContainer}>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <div className={classes.profilePic}>
            <Avatar alt={`${user?.name}`} src={`${user?.picture}`} />
          </div>
        </ListItemIcon>
        <div className={classes.userName}>
          <ListItemText primary={`${user?.name?.toLowerCase()}`} />
        </div>
        <div className={classes.arrow}>
          {open ? (
            <ExpandLess color="inherit" />
          ) : (
            <ExpandMore color="inherit" />
          )}
        </div>
      </ListItem>
      {/* <Collapse in={open} timeout="auto" unmountOnExit>
        <CollapseContainer
          onClick={() => {
            if (open) setOpen(false);
          }}
        >
          <MenuItem>
            <Link href={`/user/profile`}>
              <a>
                <LinkText>Profile</LinkText>
              </a>
            </Link>
          </MenuItem>
          <MenuItem onClick={() => logOut()}>
            <div className={classes.linkText}>Logout</div>
          </MenuItem>
        </CollapseContainer>
      </Collapse> */}
    </div>
  );
};

export default User;

const CollapseContainer = withStyles({
  root: {
    position: "absolute",
    right: 0,
    zIndex: 1000,
    backgroundColor: "#003085",
    color: "white",
    width: "auto",
    display: "flex",
    flexDirection: "column",
  },
})(Box);

const MenuItem = withStyles({
  root: {
    width: "100%",
    height: "100%",
    padding: 16,
    borderBottom: "1px solid white",
    color: "white",
    cursor: "pointer",
    textAlign: "center",
    "&:hover": {
      borderBottom: "1px solid #3798A7",
    },
  },
})(Box);

const LinkText = withStyles({
  root: {
    color: "white",
    "&:hover": {
      color: "#3798A7",
    },
  },
})(Typography);
