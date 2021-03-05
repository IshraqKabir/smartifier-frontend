import IImage from "./IImage";

export default interface IOption {
  id: number;
  question_id: number;
  is_right: boolean;
  serial: number;
  title?: number;
  image?: IImage;
}
