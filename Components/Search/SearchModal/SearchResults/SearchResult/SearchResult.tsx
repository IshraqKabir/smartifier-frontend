import React from "react";
import { Box, Typography, withStyles } from "@material-ui/core";
import ISearchResult from "../../../../../Models/ISearchResult";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

import Link from "next/link";

interface IProps {
  result: ISearchResult;
  type: string;
}

const SearchResult: React.FC<IProps> = ({ result, type }) => {
  const link =
    type === "topic"
      ? `/blog/topics/${result.slug}/posts`
      : type === "tag"
      ? `/blog/tags/${result.slug}/posts`
      : `/blog/posts/${result.slug}`;

  return (
    <Link href={link}>
      <a>
        <Container>
          {result.title && <Title>{result.title}</Title>}
          {result.name && <Title>{result.name}</Title>}
          <ResultType>{type && type}</ResultType>
          <RightIcon />
        </Container>
      </a>
    </Link>
  );
};

export default SearchResult;

const Container = withStyles({
  root: {
    padding: 20,
    display: "flex",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "#edf2f7",
    },
    cursor: "pointer",
  },
})(Box);

const Title = withStyles({
  root: {
    fontSize: 20,
    textTransform: "capitalize",
    paddingRight: 10,
  },
})(Typography);

const ResultType = withStyles({
  root: {
    color: "#718096",
    fontSize: 14,
    marginLeft: "auto",
    textTransform: "capitalize",
    flexShrink: 0,
  },
})(Typography);

const RightIcon = withStyles({
  root: {
    color: "#718096",
    height: 20,
    width: 20,
    flexShrink: 0,
  },
})(KeyboardArrowRightIcon);
