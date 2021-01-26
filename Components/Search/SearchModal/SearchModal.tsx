import React from "react";
import { makeStyles } from "@material-ui/core";

interface IProps {
  handleClose: Function;
}

const useStyles = makeStyles({
  backdrop: {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "black",
    opacity: 0.6,
    zIndex: 1000,
  },
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 2000,
    color: "black",
    width: "100vw",
    height: 200,
  },
});

const SearchModal: React.FC<IProps> = ({ handleClose }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.backdrop} onClick={() => handleClose()}></div>
      <div className={classes.container}>asdfkh jaskldfhklahsd fkjahsdf k</div>
    </>
  );
};

export default SearchModal;
