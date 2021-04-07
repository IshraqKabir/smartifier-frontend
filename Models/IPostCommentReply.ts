import IPostCommentUser from "./IPostCommentUser";

export default interface IPostCommentReply {
  id: number;
  comment: string;
  comment_id: number;
  user: IPostCommentUser;
}
