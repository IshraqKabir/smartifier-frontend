import React from "react";
import { Box, makeStyles, withStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

interface IProps {
  query: String;
  setQuery: Function;
}

const SearchBox: React.FC<IProps> = ({ query, setQuery }) => {
  const classes = useStyles();
  return (
    <Container>
      <Icon />
      <input
        className={classes.input}
        value={`${query}`}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search Smartifier Blog"
      />
    </Container>
  );
};

export default SearchBox;

const Container = withStyles({
  root: {
    width: "100%",
    backgroundColor: "#f7fafc",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    display: "flex",
    alignItems: "center",
    padding: 10,
  },
})(Box);

const useStyles = makeStyles({
  input: {
    border: "none",
    width: "100%",
    borderRadius: 15,
    color: "#96A4B7",
    backgroundColor: "inherit",
  },
});

const Icon = withStyles({
  root: {
    color: "#96A4B7",
    cursor: "pointer",
    marginRight: 10,
  },
})(SearchIcon);
