import { Box, CircularProgress, withStyles } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";

import GoogleButton from "react-google-button";

interface IProps {}

const GoogleLoginButton: React.FC<IProps> = () => {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
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
        <Loading>
          <CircularProgress color="inherit" />
        </Loading>
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
  },
})(Box);
