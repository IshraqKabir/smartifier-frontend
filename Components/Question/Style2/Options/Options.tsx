import { Box, withStyles } from "@material-ui/core";
import React from "react";
import IOption from "../../../../Models/IOption";
import Option from "../Option/Option";

interface IProps {
  options: IOption[];
}

const Options: React.FC<IProps> = ({ options }) => {
  return (
    <Container>
      {options &&
        options.map((option, index) => {
          return (
            <Option key={option.id} option={option} position={index + 1} />
          );
        })}
    </Container>
  );
};

export default Options;

const Container = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "4rem 0rem 0rem 0rem",
  },
})(Box);
