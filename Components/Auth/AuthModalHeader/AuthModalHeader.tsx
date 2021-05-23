import { makeStyles, Typography } from "@material-ui/core";
import { useContext } from "react";
import AuthModalContext from "../../../Contexts/AuthModalContext";

import { Tab } from "../useAuthModal";

export default function AuthModalHeader() {
  const { currentTab, setCurrentTab } = useContext(AuthModalContext);
  const classes = useStyles({ currentTab });

  return (
    <div className={classes.container}>
      <div
        className={`${classes.singleHeader} ${classes.signin}`}
        onClick={() => {
          setCurrentTab("signin");
        }}
      >
        <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
          Log In
        </Typography>
      </div>
      <div
        className={`${classes.singleHeader} ${classes.signup}`}
        onClick={() => {
          setCurrentTab("signup");
        }}
      >
        <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
          Register
        </Typography>
      </div>
    </div>
  );
}

interface StyleProps {
  currentTab: Tab;
}

const useStyles = makeStyles({
  container: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    cursor: "pointer",
  },
  singleHeader: {
    width: "50%",
    textAlign: "center",
    padding: "1rem",
    border: "1px solid lightgray",
  },
  signin: {
    backgroundColor: ({ currentTab }: StyleProps) => {
      return currentTab === "signin" ? "inherit" : "#f5f5f5";
    },
  },
  signup: {
    backgroundColor: ({ currentTab }: StyleProps) => {
      return currentTab === "signup" ? "inherit" : "#f5f5f5";
    },
  },
});
