import { Box, Typography, withStyles } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";

import GoogleButton from "react-google-button";
import useLocalState from "../../custom-hooks/useLocalState";

interface IProps {}

const GoogleLoginButton: React.FC<IProps> = () => {
  const [url, setUrl] = useState<string>("");

  const [user] = useLocalState<any>("user", "");

  useEffect(() => {
    if (user) return;
    axios({
      method: "get",
      url: "/api/auth/google?get=link",
    }).then((res) => {
      setUrl(res.data.url);
    });
  }, []);

  return (
    <Container>
      {url ? (
        <a href={`${url}`}>
          <GoogleButton />
        </a>
      ) : (
        <Loading>Loading...</Loading>
      )}
    </Container>
  );
};

export default GoogleLoginButton;

const Container = withStyles({
  root: {},
})(Box);

const Loading = withStyles({
  root: {
    color: "white",
    textTransform: "capitalize",
  },
})(Typography);
