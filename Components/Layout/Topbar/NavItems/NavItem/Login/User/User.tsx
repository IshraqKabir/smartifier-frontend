import React, { useState } from "react";
import useLocalState from "../../../../../../../custom-hooks/useLocalState";

import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";

import Image from "next/image";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles({
  userContainer: {
    float: "right",
    whiteSpace: "nowrap",
    textTransform: "capitalize",
    color: "#3798A7",
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
    color: "white",
    marginLeft: 5,
    marginRight: 5,
  },
});

const User: React.FC<{}> = () => {
  const [user] = useLocalState<any>("user", "");
  const [open, setOpen] = useState<boolean>(false);

  const classes = useStyles();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.userContainer}>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <div className={classes.profilePic}>
            <Image src={`${user?.image_url}`} width={"100%"} height={"100%"} />
          </div>
        </ListItemIcon>
        <div className={classes.userName}>
          <ListItemText primary={`${user?.name?.toLowerCase()}`} />
        </div>
        {open ? <ExpandLess color="inherit" /> : <ExpandMore color="inherit" />}
      </ListItem>
    </div>
  );
};

export default User;
