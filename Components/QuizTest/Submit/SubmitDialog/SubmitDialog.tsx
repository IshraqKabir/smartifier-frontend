import { Box, Button, Dialog, withStyles } from "@material-ui/core";
import React, { useContext } from "react";
import { QuizTestStateContext } from "../../Questions/Questions";

export interface IProps {
  open: boolean;
  onClose: () => void;
}

export default function SubmitDialog({ onClose, open }: IProps) {
  const { isSubmitting, handleSubmit } = useContext(QuizTestStateContext);

  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogueContaier>
        <Title>Are you sure you want to submit the test?</Title>
        <ButtonsContainer>
          <WarningButton onClick={handleSubmit}>
            {isSubmitting ? "Submitting..." : "Yes"}
          </WarningButton>
          <Button onClick={onClose}>No</Button>
        </ButtonsContainer>
      </DialogueContaier>
    </Dialog>
  );
}

const DialogueContaier = withStyles({
  root: {
    padding: "2rem",
  },
})(Box);

const Title = withStyles({
  root: { fontWeight: 600, fontSize: "1.3rem", margin: "1rem auto" },
})(Box);

const ButtonsContainer = withStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
})(Box);

const WarningButton = withStyles({
  root: {
    backgroundColor: "red",
    color: "white",
    "&:hover": {
      color: "red",
    },
  },
})(Button);
