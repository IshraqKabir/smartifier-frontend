import React, { useContext } from "react";
import Dialog from "@material-ui/core/Dialog";
import { LinearProgress, makeStyles } from "@material-ui/core";
import AuthModalHeader from "./AuthModalHeader/AuthModalHeader";
import useAuthModal from "./useAuthModal";
import AuthModalContext from "../../Contexts/AuthModalContext";
import SigninTab from "./SigninTab/SigninTab";
import VerifyEmailTab from "./VerifyEmailTab/VerifyEmailTab";
import UserContext from "../../Contexts/UserContext";
import SignupTab from "./SignupTab/SignupTab";
import ForgotPasswordTab from "./ForgotPasswordTab/ForgotPasswordTab";
import ResetPasswordTab from "./ResetPasswordTab/ResetPasswordTab";

interface IProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function AuthModal({ isOpen, closeModal }: IProps) {
  const { setUser } = useContext(UserContext);
  const {
    currentTab,
    setCurrentTab,
    signinFormik,
    signupFormik,
    userAlreadyExists,
    email,
    password,
    verifyEmailFormik,
    forgotPasswordFormik,
    resetPasswordFormik,
    signinTabError,
    verifyEmailTabError,
    forgotPasswordTabError,
    resetPasswordTabError,
    resendPasswordResetMail,
    resendEmailVerifyMail,
    isLoading,
  } = useAuthModal(setUser, closeModal);

  const classes = useStyles();

  return (
    <Dialog
      aria-labelledby="customized-dialog-title"
      open={isOpen}
      disableBackdropClick={false}
      onBackdropClick={() => {
        if (isLoading) return;
        closeModal();
      }}
    >
      <AuthModalContext.Provider
        value={{
          currentTab,
          setCurrentTab,
          signinFormik,
          signupFormik,
          userAlreadyExists,
          email,
          password,
          verifyEmailFormik,
          forgotPasswordFormik,
          resetPasswordFormik,
          signinTabError,
          verifyEmailTabError,
          forgotPasswordTabError,
          resetPasswordTabError,
          resendPasswordResetMail,
          resendEmailVerifyMail,
        }}
      >
        <div className={classes.container}>
          {currentTab !== "verify_email" && currentTab !== "reset_password" && (
            <AuthModalHeader />
          )}

          {isLoading && (
            <div style={{ width: "100%" }}>
              <LinearProgress />
            </div>
          )}

          <div className={classes.tabContainer}>
            {currentTab === "signin" && <SigninTab />}
            {currentTab === "signup" && <SignupTab />}
            {currentTab === "verify_email" && <VerifyEmailTab />}
            {currentTab === "forgot_password" && <ForgotPasswordTab />}
            {currentTab === "reset_password" && <ResetPasswordTab />}
          </div>
        </div>
      </AuthModalContext.Provider>
    </Dialog>
  );
}

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  tabContainer: {
    display: "flex",
    padding: "1rem",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
