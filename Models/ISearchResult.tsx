import IPost from "./IPost";

export default interface ISearchResult {
  title?: String;
  name?: String;
  slug: String;
  posts?: IPost[];
}
