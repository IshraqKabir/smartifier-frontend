import React, { useEffect } from "react";

import axios from "axios";
import { local_backend_url } from "../../url";
import useLocalState from "../../custom-hooks/useLocalState";
import {
  Box,
  CircularProgress,
  LinearProgress,
  Typography,
  withStyles,
} from "@material-ui/core";

import { useRouter } from "next/router";
import getGoogleIdToken from "../../repository/SignIn/getGoogleIdToken";
import getUserDataFromGoogle from "../../repository/SignIn/getUserDataFromGoogle";
import backendSignIn from "../../repository/SignIn/backendSignIn";

interface IProps {}

const Google: React.FC<IProps> = () => {
  const router = useRouter();
  const { code } = router.query;

  const [user, setUser] = useLocalState("user", "");

  // useEffect(() => {
  //   if (code) {
  //     login();
  //   }
  // }, [code]);

  // async function login() {
  //   // get google id token (code)
  //   const id_token = await getGoogleIdToken(code);
  //   // get user data from google (id_token)
  //   const {
  //     email,
  //     email_verified,
  //     at_hash,
  //     name,
  //     picture,
  //   } = await getUserDataFromGoogle(id_token);
  //   // login to our own backend (
  //   // id_token, email, at_hash, email_verified, name, picture
  //   // )
  //   const token = await backendSignIn({
  //     id_token,
  //     email,
  //     at_hash,
  //     email_verified,
  //     name,
  //     picture,
  //   });

  //   // set the user
  //   const authUser: any = {
  //     email: email,
  //     name: name,
  //     picture: picture,
  //     token: token,
  //   };

  //   setUser(authUser);
  // }

  useEffect(() => {
    if (code) {
      axios({
        method: "get",
        url: `/api/auth/google?get=user&code=${code}`,
      }).then((res) => {
        const id_token = res.data.user.data.id_token;

        axios({
          method: "GET",
          url: `https://oauth2.googleapis.com/tokeninfo?id_token=${id_token}`,
        })
          .then((response: any) => {
            const {
              email,
              email_verified,
              at_hash,
              name,
              picture,
            } = response.data;

            axios
              .post(`${local_backend_url}/api/auth/googleSignIn`, {
                id_token: id_token,
                email: email,
                at_hash: at_hash,
                email_verified: email_verified === "true" ? true : false,
                name: name,
                picture: picture,
              })
              .then((response) => {
                const token = response.data;

                const user: any = {
                  email: email,
                  name: name,
                  picture: picture,
                  token: token,
                };

                setUser(user);

                window.close();
                // router.replace("/");
              })
              .catch((error) => {
                // window.history.back();
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error);
            // window.history.back();
          });
      });
    }
  }, [code]);

  return (
    <>
      <LinearProgress />
      <Container>
        <Title variant="h6">Please wait while we sign you in...</Title>
        <Title>Redirecting you to smartifier.org...</Title>
        <CircularProgress />
      </Container>
    </>
  );
};

export default Google;

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
