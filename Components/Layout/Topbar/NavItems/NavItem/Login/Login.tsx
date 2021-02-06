import axios from "axios";
import React, { useEffect } from "react";
import useLocalState from "../../../../../../custom-hooks/useLocalState";

import { backend_url } from "../../../../../../url";

import post from "../../../../../../UtilFunctions/post";
import GoogleLoginButton from "../../../../../GoogleLoginButton/GoogleLoginButton";

import User from "./User/User";

interface IProps {}

const Login: React.FC<IProps> = () => {
  const [user, setUser] = useLocalState<any>("user", "");

  const onSignIn = async (googleUser: any) => {
    if (!googleUser.error) {
      const profile = googleUser.getBasicProfile();
      const id_token = googleUser.getAuthResponse().id_token;
      const google_id = parseInt(profile.getId());

      console.log(id_token);
      console.log(google_id);

      post(
        `${backend_url}/api/auth/google/verify`,
        { id_token: id_token, google_id: google_id },
        (response: any) => {
          setUser(response.data);
          console.log(response.data)
        },
        () => {
          signOut();
        }
      );
    }
  };

  function signOut() {
    const w: any = window;
    const { gapi } = w;

    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log("User signed out.");
    });
  }

  const onFail = ({ error }) => {
    console.log(error);
  };

  useEffect(() => {
    setTimeout(() => {
      const w: any = window;
      const { gapi } = w;

      gapi.load("auth2", () => {
        const auth2 = gapi.auth2.init({
          client_id: "540083931812-7bt05mqtrriog1f1kdpvotbvnr01iien",
        });

        gapi.signin2.render("signin-button", {
          width: "100%",
          height: 40,
          longtitle: false,
          onsuccess: onSignIn,
          onfailure: onFail,
        });
      });
    }, 500);
  }, []);

  return <>{!user.id ? <GoogleLoginButton /> : <User />}</>;
};

export default Login;
