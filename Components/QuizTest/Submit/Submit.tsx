import React, { useContext, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import useSubmit from "./useSubmit";
import SubmitDialog from "./SubmitDialog/SubmitDialog";

export default function Submit() {
  const { open, handleOpen, handleClose } = useSubmit();

  return (
    <div>
      <br />
      <SubmitButton variant="outlined" fullWidth={true} onClick={handleOpen}>
        Submit
      </SubmitButton>
      <SubmitDialog open={open} onClose={handleClose} />
    </div>
  );
}

const SubmitButton = withStyles({
  root: {
    color: "#0f3a86",
    border: "1px solid #0f3a86",
    marginBottom: "2rem",
    marginTop: "0.5rem",
  },
})(Button);
