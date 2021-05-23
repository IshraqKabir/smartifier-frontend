import {
  Button,
  Divider,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { useContext } from "react";
import GoogleButton from "react-google-button";
import AuthModalContext from "../../../Contexts/AuthModalContext";
import PasswordField from "../../AuthForm/PasswordField/PasswordField";
import GoogleLoginButton from "../../GoogleLoginButton/GoogleLoginButton";

export default function SigninTab() {
  const { signinFormik, signinTabError, setCurrentTab } =
    useContext(AuthModalContext);

  const classes = useStyles();

  return (
    <div>
      <div className={classes.googleButtonContainer}>
        <GoogleLoginButton />
      </div>

      <form onSubmit={signinFormik.handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          id="email"
          name="email"
          label="Email"
          value={signinFormik.values.email}
          onChange={signinFormik.handleChange}
          error={
            signinFormik.touched.email && Boolean(signinFormik.errors.email)
          }
          helperText={signinFormik.touched.email && signinFormik.errors.email}
        />

        <PasswordField
          value={signinFormik.values.password}
          handleChange={signinFormik.handleChange}
          touched={signinFormik.touched.password}
          error={signinFormik.errors.password}
        />

        {signinTabError && (
          <Typography variant="subtitle2" color="error">
            {signinTabError}
          </Typography>
        )}

        <Typography
          variant="subtitle2"
          style={{
            margin: "0.5rem 0",
          }}
        >
          <a
            style={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={() => {
              setCurrentTab("forgot_password");
            }}
          >
            Forgot password?
          </a>
        </Typography>

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
          Login
        </Button>
      </form>

      <Typography
        variant="subtitle2"
        style={{
          margin: "1rem 0 0 0",
        }}
      >
        Dont have an account?{" "}
        <a
          style={{
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={() => {
            setCurrentTab("signup");
          }}
        >
          Create Account
        </a>
      </Typography>
    </div>
  );
}

const useStyles = makeStyles({
  googleButtonContainer: {
    margin: "1rem 0",
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
});
