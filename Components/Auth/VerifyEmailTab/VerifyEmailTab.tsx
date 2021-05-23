import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import { useContext } from "react";
import AuthModalContext from "../../../Contexts/AuthModalContext";
import useResendMail from "../useResendMail";

export default function VerifyEmailTab({}) {
  const {
    email,
    password,
    verifyEmailFormik,
    verifyEmailTabError,
    resendEmailVerifyMail,
  } = useContext(AuthModalContext);
  const classes = useStyles();

  const { showResendLink, secondsRemaining, handleSend } = useResendMail();

  return (
    <div className={classes.container}>
      <Typography variant="h6" style={{ textAlign: "center" }}>
        Email Verification.
      </Typography>
      <Typography
        variant="subtitle1"
        style={{
          textAlign: "center",
          lineHeight: "1.3rem",
          margin: "0.5rem 0",
        }}
      >
        Your email is not verified by us yet. Dont worry, we have sent a
        verification code to your email, <b>{email}</b>. Please enter the code
        below to verify your account and start your journey!
      </Typography>

      <form onSubmit={verifyEmailFormik.handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          id="code"
          name="code"
          label="Verification Code"
          value={verifyEmailFormik.values.code}
          onChange={verifyEmailFormik.handleChange}
          error={
            verifyEmailFormik.touched.code &&
            Boolean(verifyEmailFormik.errors.code)
          }
          helperText={
            verifyEmailFormik.touched.code && verifyEmailFormik.errors.code
          }
        />

        {verifyEmailTabError && (
          <Typography variant="subtitle2" color="error">
            {verifyEmailTabError}
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
          Verify
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
              resendEmailVerifyMail(email, password);
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

const useStyles = makeStyles({
  container: {},
});
