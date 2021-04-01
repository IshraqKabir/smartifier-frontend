import { Box, Button, Dialog, withStyles } from "@material-ui/core";
import React, { useState } from "react";

interface IProps {
  open: boolean;
  onClose: () => void;
  handleSubmit: () => void;
}

const RetakeDialogue: React.FC<IProps> = (props) => {
  const { onClose, open, handleSubmit } = props;
  const [isSubmitting, setIsSubmitting] = useState<Boolean>(false);

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="Retake Dialog" open={open}>
      <DialogueContaier>
        <Title>Are you sure you want to retake the test?</Title>
        <WarningText>
          *Your previous answers will be deleted if you retake the test.
        </WarningText>
        <ButtonsContainer>
          <WarningButton
            onClick={() => {
              setIsSubmitting(true);
              handleSubmit();
            }}
          >
            {isSubmitting ? "Loading..." : "Retake"}
          </WarningButton>
          <Button onClick={handleClose}>No</Button>
        </ButtonsContainer>
      </DialogueContaier>
    </Dialog>
  );
};

export default RetakeDialogue;

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

const WarningText = withStyles({
  root: {
    fontSize: "0.8rem",
    fontWeight: 600,
    marginBottom: "1rem",
    color: "red",
  },
})(Box);
