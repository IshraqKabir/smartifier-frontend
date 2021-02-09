import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import SearchBox from "./SearchBox/SearchBox";
import useSearch from "../../../custom-hooks/useSearch";
import SearchResults from "./SearchResults/SearchResults";

interface IProps {
  handleClose: Function;
}

const SearchModal: React.FC<IProps> = ({ handleClose }) => {
  const [query, setQuery] = useState<String>("");
  const classes = useStyles();

  const { data: results, loading, error } = useSearch(
    "/api/canvas-blog/search",
    query
  );

  return (
    <>
      <div className={classes.backdrop} onClick={() => handleClose()}></div>
      <div className={classes.container}>
        <SearchBox query={query} setQuery={setQuery} />
        {results && (
          <SearchResults results={results} handleClose={handleClose} />
        )}
      </div>
    </>
  );
};

export default SearchModal;

const useStyles = makeStyles({
  backdrop: {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "black",
    opacity: 0.6,
    zIndex: 9000,
  },
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10000,
    color: "black",
    width: "100vw",
    paddingInline: "20%",
    paddingTop: 50,
    ["@media (max-width: 700px)"]: {
      paddingInline: "10%",
    },
    ["@media (max-width: 400px)"]: {
      paddingInline: "5%",
    },
  },
});
