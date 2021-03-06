import { Typography } from "@material-ui/core";
import React from "react";
import Topbar from "../../Components/Layout/Topbar/Topbar";
import Profile from "../../Components/Profile/Profile";
import useLocalState from "../../custom-hooks/useLocalState";

const UserProfile: React.FC<{}> = () => {
  const [user] = useLocalState("user", "");
  return (
    <>
      <Topbar />
      {user && !user.token ? (
        <Typography variant="h4">You have to login to continue</Typography>
      ) : (
        <Profile />
      )}
    </>
  );
};

export default UserProfile;
