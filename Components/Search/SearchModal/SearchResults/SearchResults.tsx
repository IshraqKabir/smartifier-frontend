import { Box, withStyles } from "@material-ui/core";
import { FormatListNumberedRtlOutlined } from "@material-ui/icons";
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
          return <SearchResult key={index} type="post" result={post} />;
        })}

      {results.topics &&
        results.topics.map((topic, index) => {
          return <SearchResult key={index} type="topic" result={topic} />;
        })}

      {results.tags &&
        results.tags.map((tag, index) => {
          return <SearchResult key={index} type="tag" result={tag} />;
        })}
    </Container>
  );
};

export default SearchResults;

const Container = withStyles({
  root: {
    maxHeight: "80vh",
    overflowX: "hidden",
    overflowY: "scroll",
    background: "white",
  },
})(Box);
