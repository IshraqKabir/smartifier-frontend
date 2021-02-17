import { Box, withStyles } from "@material-ui/core";
import React from "react";
import IOption from "../../../../Models/IOption";
import OptionContainer from "../../OptionContainer/OptionContainer";
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
            <OptionContainer
              key={option.id}
              option={option}
              position={index + 1}
            >
              <Option option={option} position={index + 1} />
            </OptionContainer>
          );
        })}
    </Container>
  );
};

export default Options;

const Container = withStyles({
  root: {
    marginTop: "2rem",
  },
})(Box);
