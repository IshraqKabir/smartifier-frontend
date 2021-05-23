import { Button, TextField, Typography } from "@material-ui/core";
import { useContext } from "react";
import AuthModalContext from "../../../Contexts/AuthModalContext";
import PasswordField from "../../AuthForm/PasswordField/PasswordField";
import useResendMail from "../useResendMail";

export default function ResetPasswordTab() {
  const {
    resetPasswordFormik,
    email,
    resetPasswordTabError,
    resendPasswordResetMail,
  } = useContext(AuthModalContext);

  const { showResendLink, secondsRemaining, handleSend } = useResendMail();

  return (
    <div>
      <Typography variant="h6" style={{ textAlign: "center" }}>
        Password Reset
      </Typography>
      <Typography
        variant="subtitle1"
        style={{
          textAlign: "center",
          lineHeight: "1.3rem",
          margin: "0.5rem 0",
        }}
      >
        We have sent a verification code to your email, <b>{email}</b>. Please
        enter the code below to change your account's password.
      </Typography>

      <form onSubmit={resetPasswordFormik.handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          id="code"
          name="code"
          label="Verfication Code"
          value={resetPasswordFormik.values.code}
          onChange={resetPasswordFormik.handleChange}
          error={
            resetPasswordFormik.touched.code &&
            Boolean(resetPasswordFormik.errors.code)
          }
          helperText={
            resetPasswordFormik.touched.code && resetPasswordFormik.errors.code
          }
        />

        <Typography variant="subtitle2">
          *Setting a strong password is important for your data security!
        </Typography>

        <PasswordField
          value={resetPasswordFormik.values.password}
          handleChange={resetPasswordFormik.handleChange}
          touched={resetPasswordFormik.touched.password}
          error={resetPasswordFormik.errors.password}
        />

        <PasswordField
          value={resetPasswordFormik.values.confirmPassword}
          handleChange={resetPasswordFormik.handleChange}
          touched={resetPasswordFormik.touched.confirmPassword}
          error={resetPasswordFormik.errors.confirmPassword}
          id="confirmPassword"
          label="Confirm Password"
        />

        {resetPasswordTabError && (
          <Typography variant="subtitle2" color="error">
            {resetPasswordTabError}
          </Typography>
        )}

        <Button
          variant="contained"
          fullWidth
          type="submit"
          style={{
            marginTop: "0.5rem",
            backgroundColor: "#3f51b5",
            color: "white",
          }}
        >
          Change Password
        </Button>
      </form>

      <Typography
        variant="subtitle2"
        style={{
          margin: "1rem 0 0 0",
        }}
      >
        Did not get the mail?{" "}
        {showResendLink ? (
          <a
            style={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={() => {
              resendPasswordResetMail(email);
              handleSend();
            }}
          >
            Resend Verfication Code
          </a>
        ) : (
          `You can retry in ${secondsRemaining} ${
            secondsRemaining > 1 ? "seconds" : "second"
          }`
        )}
      </Typography>
    </div>
  );
}
