import React from "react";
import ISearchResult from "../../../../../Models/ISearchResult";

interface IProps {
  result: ISearchResult;
}

const SearchResult: React.FC<IProps> = ({ result }) => {
  return <p>yo</p>;
};

export default SearchResult;
