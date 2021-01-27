import { Box, withStyles } from "@material-ui/core";
import React from "react";
import ISearchResult from "../../../../Models/ISearchResult";
import SearchResult from "./SearchResult/SearchResult";

interface IProps {
  results: IResult;
}

interface IResult {
  posts: ISearchResult[];
  topics: ISearchResult[];
  tags: ISearchResult[];
}

const SearchResults: React.FC<IProps> = ({ results }) => {
  return (
    <Container>
      {results.posts &&
        results.posts.map((post, index) => {
          return <SearchResult key={index} result={post} />;
        })}
    </Container>
  );
};

export default SearchResults;

const Container = withStyles({
  root: {
    width: "100%",
    maxHeight: "80vh",
    overflowX: "hidden",
    overflowY: "scroll",
    background: "white",
  },
})(Box);
