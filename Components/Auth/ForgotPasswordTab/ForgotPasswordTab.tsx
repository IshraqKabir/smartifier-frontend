import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import { useContext } from "react";
import AuthModalContext from "../../../Contexts/AuthModalContext";

export default function ForgotPasswordTab({}) {
  const { forgotPasswordFormik, forgotPasswordTabError } =
    useContext(AuthModalContext);
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h6" style={{ textAlign: "center" }}>
        Password Reset.
      </Typography>
      <Typography
        variant="subtitle1"
        style={{
          textAlign: "center",
          lineHeight: "1.3rem",
          margin: "0.5rem 0",
        }}
      >
        Please enter your email so we can send a verification code to your
        email.
      </Typography>

      <form onSubmit={forgotPasswordFormik.handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          id="email"
          name="email"
          label="Email"
          value={forgotPasswordFormik.values.email}
          onChange={forgotPasswordFormik.handleChange}
          error={
            forgotPasswordFormik.touched.email &&
            Boolean(forgotPasswordFormik.errors.email)
          }
          helperText={
            forgotPasswordFormik.touched.email &&
            forgotPasswordFormik.errors.email
          }
        />

        {forgotPasswordTabError && (
          <Typography variant="subtitle2" color="error">
            {forgotPasswordTabError}
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
          Send Code
        </Button>
      </form>
    </div>
  );
}

const useStyles = makeStyles({
  container: {},
});
