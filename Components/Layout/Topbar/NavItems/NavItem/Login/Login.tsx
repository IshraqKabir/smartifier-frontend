import React from "react";

import { GoogleLogin } from "react-google-login";

import { backend_url } from "../../../../../../url";

import post from "../../../../../../UtilFunctions/post";
import useLocalState from "../../../../../../custom-hooks/useLocalState";
import User from "./User/User";
import { makeStyles, Typography, withStyles } from "@material-ui/core";

const useStyles = makeStyles({
  googleIcon: {
    height: 20,
    width: 20,
  },
  loginButton: {
    background: "white",
    color: "black",
    border: "none",
    outline: "inherit",
    cursor: "pointer",
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: 100,
    paddingBlock: 5,
    paddingInline: 5,
    borderRadius: 5,
  }
});

const LoginText = withStyles({
  root: {
    fontSize: 18,
  }
})(Typography);

const Login: React.FC<{}> = () => {
  const [user, setUser] = useLocalState<any>("user", "");

  const classes = useStyles();

  const responseGoogle = async (googleUser) => {
    if (!googleUser.error) {
      const id_token = googleUser.tokenId;
      const google_id = parseInt(googleUser.profileObj.googleId);

      post(
        `${backend_url}/api/auth/google/verify`,
        { id_token: id_token, google_id: google_id },
        (response) => {
          setUser(response.data);
        },
        () => {}
      );
    }
  };

  return (
    <>
      {!user ? (
        <GoogleLogin
          clientId="540083931812-7bt05mqtrriog1f1kdpvotbvnr01iien.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className={classes.loginButton}
            >
              <GoogleIcon />
              <LoginText>Login</LoginText>
            </button>
          )}
        />
      ) : (
        <User />
      )}
    </>
  );
};

export default Login;

const GoogleIcon = () => {
  const classes = useStyles();

  return (
    <svg
      className={classes.googleIcon}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
    >
      <defs>
        <path
          id="a"
          d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
        />
      </defs>
      <clipPath id="b">
        <use xlinkHref="#a" overflow="visible" />
      </clipPath>
      <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
      <path
        clipPath="url(#b)"
        fill="#EA4335"
        d="M0 11l17 13 7-6.1L48 14V0H0z"
      />
      <path
        clipPath="url(#b)"
        fill="#34A853"
        d="M0 37l30-23 7.9 1L48 0v48H0z"
      />
      <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
    </svg>
  );
};
