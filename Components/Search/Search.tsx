import React, { useState } from "react";
import { makeStyles, Typography, withStyles } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import SearchModal from "./SearchModal/SearchModal";

interface IProps {}

const useStyles = makeStyles({
  container: {
    width: "100%",
    marginBlock: 30,
  },
  search: {
    width: "100%",
    maxWidth: 414,
    marginLeft: "auto",
    background: "#0380A7D4 0% 0% no-repeat padding-box",
    textAlign: "center",
    borderRadius: 40,
    paddingBlock: 5,
    cursor: "pointer",
    ["@media (max-width: 750px)"]: {
      maxWidth: "100%",
    },
  },
  modalContainer: {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "black",
    opacity: 0.4,
    zIndex: 200,
  },
  modalContent: {},
});

const SearchText = withStyles({
  root: {
    textTransform: "capitalize",
    color: "#CFCFCF",
    "&:hover": {
      color: "white",
    },
  },
})(Typography);

const Search: React.FC<IProps> = () => {
  const [open, setOpen] = useState<boolean>(true);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.search} onClick={handleOpen}>
          <SearchText>Search</SearchText>
        </div>
      </div>
      {open ? <SearchModal handleClose={handleClose} /> : null}
    </>
  );
};

export default Search;
