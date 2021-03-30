import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import axios from "axios";
import { local_backend_url } from "../../../url";
import useLocalState from "../../../custom-hooks/useLocalState";

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      yooo
    </Dialog>
  );
}

interface IProps {
  answers: any;
  test_id: number;
}

const Submit: React.FC<IProps> = ({ answers, test_id }) => {
  const [user] = useLocalState("user", "");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
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
      .then(() => {})
      .catch(() => {});

    setOpen(true);
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
      <SimpleDialog open={open} onClose={handleClose} />
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
