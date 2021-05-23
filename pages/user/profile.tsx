import { Typography } from "@material-ui/core";
import React, { useContext } from "react";
import Topbar from "../../Components/Layout/Topbar/Topbar";
import Profile from "../../Components/Profile/Profile";
import UserContext from "../../Contexts/UserContext";

const UserProfile: React.FC<{}> = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <Topbar />
      {!user ? (
        <Typography variant="h4">You have to login to continue</Typography>
      ) : (
        <Profile />
      )}
    </>
  );
};

export default UserProfile;
