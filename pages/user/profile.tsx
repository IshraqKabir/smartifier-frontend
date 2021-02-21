import { Typography } from "@material-ui/core";
import React from "react";
import Topbar from "../../Components/Layout/Topbar/Topbar";
import useLocalState from "../../custom-hooks/useLocalState";

const Profile: React.FC<{}> = () => {
  const [user] = useLocalState("user", "");
  return (
    <>
      <Topbar />
      {!user.token ? (
        <Typography variant="h4">You have to login to continue</Typography>
      ) : (
        "user"
      )}
    </>
  );
};

export default Profile;
