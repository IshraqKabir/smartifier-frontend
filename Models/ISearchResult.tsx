import IPost from "./IPost";

export default interface ISearchResult {
  title: String;
  slug: String;
  posts?: IPost[];
}
