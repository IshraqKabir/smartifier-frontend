import IMeta from "./IMeta";
import IPostWriter from "./IPostWriter";
import ITag from "./ITag";
import ITopic from "./ITopic";

export default interface IPost {
  id: string;
  slug: string;
  title: string;
  summary?: string;
  body: string;
  published_at?: string;
  featured_image: string;
  featured_image_caption?: string;
  meta?: IMeta;
  created_at: string;
  views_count: number;
  read_time: string;
  user: IPostWriter;
  topic: ITopic[];
  tags: ITag[];
  likes_count?: number;
  comments_count?: number;
}
