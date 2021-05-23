import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import { useContext } from "react";
import AuthModalContext from "../../../Contexts/AuthModalContext";
import PasswordField from "../../AuthForm/PasswordField/PasswordField";
import GoogleLoginButton from "../../GoogleLoginButton/GoogleLoginButton";

export default function SignupTab() {
  const { signupFormik, userAlreadyExists, setCurrentTab } =
    useContext(AuthModalContext);
  const classes = useStyles();
  return (
    <div>
      <div className={classes.googleButtonContainer}>
        <GoogleLoginButton />
      </div>

      <Typography
        variant="subtitle2"
        style={{
          margin: "1rem 0 0 0",
        }}
      >
        Already have an account?{" "}
        <a
          style={{
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={() => {
            setCurrentTab("signin");
          }}
        >
          Log In
        </a>
      </Typography>

      <form onSubmit={signupFormik.handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          id="email"
          name="email"
          label="Email"
          value={signupFormik.values.email}
          onChange={signupFormik.handleChange}
          error={
            signupFormik.touched.email && Boolean(signupFormik.errors.email)
          }
          helperText={signupFormik.touched.email && signupFormik.errors.email}
        />

        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          id="name"
          name="name"
          label="Full Name"
          value={signupFormik.values.name}
          onChange={signupFormik.handleChange}
          error={signupFormik.touched.name && Boolean(signupFormik.errors.name)}
          helperText={signupFormik.touched.name && signupFormik.errors.name}
        />

        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          id="companyName"
          name="companyName"
          label="Company Name"
          value={signupFormik.values.companyName}
          onChange={signupFormik.handleChange}
          error={
            signupFormik.touched.companyName &&
            Boolean(signupFormik.errors.companyName)
          }
          helperText={
            signupFormik.touched.companyName && signupFormik.errors.companyName
          }
        />

        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          id="clubName"
          name="clubName"
          label="Club Name"
          value={signupFormik.values.clubName}
          onChange={signupFormik.handleChange}
          error={
            signupFormik.touched.clubName &&
            Boolean(signupFormik.errors.clubName)
          }
          helperText={
            signupFormik.touched.clubName && signupFormik.errors.clubName
          }
        />

        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          id="contactNumber"
          name="contactNumber"
          label="Phone Number"
          value={signupFormik.values.contactNumber}
          onChange={(e) => {
            if (!e.target.value) {
              return;
            }

            if (!e.target.value.startsWith("880", 0)) {
              return;
            }

            if (
              !Number.isInteger(
                parseInt(e.target.value[e.target.value.length - 1])
              )
            ) {
              return;
            }

            if (e.target.value.length > 13) {
              return;
            }

            signupFormik.handleChange(e);
          }}
          error={
            signupFormik.touched.contactNumber &&
            Boolean(signupFormik.errors.contactNumber)
          }
          helperText={
            signupFormik.touched.contactNumber &&
            signupFormik.errors.contactNumber
          }
        />

        <Typography variant="subtitle2">
          *Setting a strong password is important for your data security!
        </Typography>

        <PasswordField
          value={signupFormik.values.password}
          handleChange={signupFormik.handleChange}
          touched={signupFormik.touched.password}
          error={signupFormik.errors.password}
        />

        <PasswordField
          value={signupFormik.values.confirmPassword}
          handleChange={signupFormik.handleChange}
          touched={signupFormik.touched.confirmPassword}
          error={signupFormik.errors.confirmPassword}
          id="confirmPassword"
          label="Confirm Password"
        />

        {userAlreadyExists && (
          <Typography variant="subtitle2" color="error">
            There is already a user associated with this email. Please login.
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
          Register
        </Button>
      </form>
    </div>
  );
}

const useStyles = makeStyles({
  button: {
    backgroundColor: "#000566",
    marginTop: "0.5rem",
  },
  googleButtonContainer: {
    margin: "1rem 0",
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
});
