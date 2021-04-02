import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import axios from "axios";
import { local_backend_url } from "../../../url";
import useLocalState from "../../../custom-hooks/useLocalState";
import { Box } from "@material-ui/core";

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
  handleSubmit: () => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, open, handleSubmit } = props;
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogueContaier>
        <Title>Are you sure you want to submit the test?</Title>
        <ButtonsContainer>
          <WarningButton
            onClick={() => {
              // if (!isSubmitting)
              handleSubmit();
              setIsSubmitting(true);
            }}
          >
            {isSubmitting ? "Submitting..." : "Yes"}
          </WarningButton>
          <Button onClick={handleClose}>No</Button>
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

interface IProps {
  answers: any;
  test_id: number;
  setAnswersState: (answers: any) => void;
}

const Submit: React.FC<IProps> = ({ answers, test_id, setAnswersState }) => {
  const [user] = useLocalState("user", "");
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSubmit = () => {
    axios
      .post(
        `${local_backend_url}/api/quiz-test/answers/store`,
        {
          test_id: test_id,
          options: answers,
        },
        {
          headers: {
            Accept: "Application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setAnswersState({});
        window.location.href = "/user/profile";
      })
      .catch(() => {});
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <br />
      <SubmitButton variant="outlined" onClick={handleClickOpen}>
        Submit
      </SubmitButton>
      <SimpleDialog
        open={open}
        onClose={handleClose}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Submit;

const SubmitButton = withStyles({
  root: {
    color: "white",
    border: "1px solid white",
    marginBottom: "2rem",
  },
})(Button);
