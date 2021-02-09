import React, { useState } from "react";
import useLocalState from "../../../../../../../custom-hooks/useLocalState";

import {
  Avatar,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";

import { ExpandLess, ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles({
  userContainer: {
    whiteSpace: "nowrap",
    textTransform: "capitalize",
    color: "#3798A7",
    height: "auto",
    width: "auto",
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
});

const User: React.FC<{}> = () => {
  const [user] = useLocalState<any>("user", "");
  const [open, setOpen] = useState<boolean>(false);

  const classes = useStyles();

  const handleClick = () => {
    setOpen(!open);
  };

  if (!user) return;

  return (
    <div className={classes.userContainer}>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <div className={classes.profilePic}>
            <Avatar alt={`${user?.name}`} src={`${user.image_url}`} />
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
    </div>
  );
};

export default User;
