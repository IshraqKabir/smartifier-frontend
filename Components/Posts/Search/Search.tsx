import classes from "*.module.css";
import { makeStyles, Typography, withStyles } from "@material-ui/core";
import React from "react";

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
    }
  },
});

const SearchText = withStyles({
  root: {
    textTransform: "capitalize",
    color: "#CFCFCF",
    '&:hover': {
      color: "white",
    }
  },
})(Typography);

const Search: React.FC<IProps> = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.search}>
        <SearchText>Search</SearchText>
      </div>
    </div>
  );
};

export default Search;
