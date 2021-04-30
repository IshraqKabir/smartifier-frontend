import { useState } from "react";

export default function useSubmit() {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return {
    open,
    handleOpen,
    handleClose,
  };
}
