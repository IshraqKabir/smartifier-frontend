import IPostCommentReply from "./IPostCommentReply";
import IPostCommentUser from "./IPostCommentUser";

export default interface IPostComment {
  id: number;
  comment: string;
  post_id: string;
  user: IPostCommentUser;
  likes_count?: number;
  replies_count?: number;
  replies?: IPostCommentReply[];
}
