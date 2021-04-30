import IImage from "./IImage";
import IOption from "./IOption";

export default interface IQuestion {
  id: number;
  quiz_id: number;
  question?: string;
  image?: IImage;
  serial: number;
  answer_type:
    | "multiple_choice"
    | "checkboxes"
    | "short_paragraph"
    | "long_paragraph";
  options?: IOption[];
  chosenOption?: IOption;
  style: number;
}
