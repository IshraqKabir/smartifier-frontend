import IImage from "./IImage";
import IQuestion from "./IQuestion";

export default interface IQuiz {
  id: number;
  title: string;
  description: string;
  serial: number;
  start_at: string;
  end_at: string;
  certificate_title: string;
  duration: string;
  retake: boolean;
  assessment?: boolean;
  is_assessment?: boolean;
  created_at: string;
  updated_at: string;
  image_id: number;
  base_badge_image_id: number;
  passing_percentage: number;
  is_featured: boolean;
  image: IImage;
  questions?: IQuestion[];
}
