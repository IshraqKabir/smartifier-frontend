import IPostCommentUser from "./IPostCommentUser";

export default interface IPostComment {
    id: number;
    comment: string;
    post_id: string;
    user: IPostCommentUser;
}