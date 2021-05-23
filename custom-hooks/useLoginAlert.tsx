import { useState } from "react";
import useLocalState from "./useLocalState";

const useLoginAlert = () => {
  const [showLoginAlert, setShowLoginAlert] = useState<boolean>(false);

  const handleClickWhenLoggedOut = () => {
    setShowLoginAlert(true);
    setTimeout(() => {
      setShowLoginAlert(false);
    }, 3000);
  };

  const close = () => {
    setShowLoginAlert(false);
  };

  return { showLoginAlert, close, handleClickWhenLoggedOut };
};

export default useLoginAlert;
