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
    <>
      {options &&
        options.map((option, index) => {
          return (
            <OptionContainer
              key={option.id}
              option={option}
              position={index + 1}
            >
              <Option key={option.id} option={option} position={index + 1} />
            </OptionContainer>
          );
        })}
    </>
  );
};

export default Options;
