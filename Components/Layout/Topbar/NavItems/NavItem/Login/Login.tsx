import React, { useEffect } from "react";
import useLocalState from "../../../../../../custom-hooks/useLocalState";

import GoogleLoginButton from "../../../../../GoogleLoginButton/GoogleLoginButton";

import User from "./User/User";

interface IProps {}

const Login: React.FC<IProps> = () => {
  const [user] = useLocalState("user", "");

  // if (user) return <User />;

  // return <GoogleLoginButton />;

  return <div>
    {user ? "logged in": "not logged in"}
  </div>
};

export default Login;
