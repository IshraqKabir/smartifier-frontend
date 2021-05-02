import { Box, withStyles } from "@material-ui/core";
import IOption from "../../../../../Models/IOption";
import Option from "./Option/Option";

interface IProps {
  options: IOption[];
}

export default function Options({ options }: IProps) {
  return (
    <Container>
      {options &&
        options.map((option) => {
          if (option?.is_right) {
            return <Option key={option?.id} option={option} />;
          }
        })}
    </Container>
  );
}

const Container = withStyles({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#eef3f7",
    marginTop: "0.5rem",
    padding: "0 0.5rem",
  },
})(Box);
