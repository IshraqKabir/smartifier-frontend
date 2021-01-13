import React from "react";

import { GoogleLogin } from "react-google-login";

import { backend_url } from "../../../../../../url";

import post from "../../../../../../UtilFunctions/post";
import useLocalState from "../../../../../../custom-hooks/useLocalState";
import User from "./User/User";

// import User from "./User/User";

const Login: React.FC<{}> = () => {
  const [user, setUser] = useLocalState<any>("user", "");

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
        />
      ) : (
        <User />
      )}
    </>
  );
};

export default Login;
