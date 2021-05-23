import React, { useContext } from "react";

import {
  Box,
  Button,
  CircularProgress,
  LinearProgress,
  makeStyles,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";

import { useRouter } from "next/router";
import useGoogle from "./useGoogle";
import UserContext from "../../Contexts/UserContext";
import zIndexes from "../../theme/zIndexes";

import Image from "next/image";
import PasswordField from "../../Components/AuthForm/PasswordField/PasswordField";

interface IProps {}

const Google: React.FC<IProps> = () => {
  const router = useRouter();
  const { code } = router.query;

  const { setUser } = useContext(UserContext);

  const { isLoading, showSignupForm, signupFormik } = useGoogle(code, setUser);

  const classes = useStyles();

  return (
    <>
      {isLoading && <LinearProgress />}
      <Container>
        {!showSignupForm && (
          <>
            <Title variant="h6">Please wait while we sign you in...</Title>
            <Title>Redirecting you to smartifier.org...</Title>
            <CircularProgress />
          </>
        )}

        {showSignupForm && (
          <div className={classes.container}>
            <div className={classes.topbarContainer}>
              <div>
                <Image
                  src="/assets/new_logo.png"
                  alt="Smartifier Logo"
                  height={45}
                  width={135}
                />
              </div>
            </div>
            <div className={classes.formContainer}>
              {isLoading && <LinearProgress />}
              <Typography
                variant="h5"
                style={{ textAlign: "center", margin: "1rem 0" }}
              >
                Register Your Account With Us!
              </Typography>

              <form onSubmit={signupFormik.handleSubmit}>
                <TextField
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  id="name"
                  name="name"
                  label="Full Name"
                  value={signupFormik.values.name}
                  onChange={signupFormik.handleChange}
                  error={
                    signupFormik.touched.name &&
                    Boolean(signupFormik.errors.name)
                  }
                  helperText={
                    signupFormik.touched.name && signupFormik.errors.name
                  }
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
                    signupFormik.touched.companyName &&
                    signupFormik.errors.companyName
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
                    signupFormik.touched.clubName &&
                    signupFormik.errors.clubName
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
                  *Setting a strong password is important for your data
                  security!
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
          </div>
        )}
      </Container>
    </>
  );
};

export default Google;

const useStyles = makeStyles({
  topbarContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    borderBottomRightRadius: 15,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "2.5%",
    paddingRight: "2.5%",
    zIndex: zIndexes.normal,
    background:
      "transparent linear-gradient(180deg, #003EAA 0%, #002461E0 100%) 0% 0% no-repeat padding-box",
  },
  container: {
    display: "flex",
    width: "100vw",
    minHeight: "100vh",
    flexDirection: "column",
    alignItems: "center",
    padding: "5rem 0rem 0rem 0rem",
    backgroundColor: "#f0f2f5",
  },
  formContainer: {
    marginTop: "5rem",
    width: "min(97%, 700px)",
    display: "flex",
    backgroundColor: "inherit",
    borderRadius: 5,
    overflow: "hidden",
    boxShadow: "0px 0px 8px 0px #2b579a",
    flexDirection: "column",
    padding: "1rem",
  },
});

const Container = withStyles({
  root: {
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
})(Box);

const Title = withStyles({
  root: { textAlign: "center", marginTop: 30, marginBottom: 10 },
})(Typography);
