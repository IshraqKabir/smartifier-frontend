import { Avatar, makeStyles } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useLocalState from "../../../../../../custom-hooks/useLocalState";

import { ExpandLess, ExpandMore } from "@material-ui/icons";
import Link from "next/link";

interface IProps {}

const Login: React.FC<IProps> = () => {
  const [user, setUser] = useLocalState("user", "");
  const [url, setUrl] = useState<String>("");
  const [open, setOpen] = useState<boolean>(false);

  const classes = useStyles({ user });

  useEffect(() => {
    if (user) return;

    axios({
      method: "get",
      url: "/api/auth/google?get=link",
    }).then((res) => {
      setUrl(res.data.url);
    });
  }, []);

  useEffect(() => {
    if (!user) {
      axios({
        method: "get",
        url: "/api/auth/google?get=link",
      }).then((res) => {
        setUrl(res.data.url);
      });
    }
  }, [user]);

  const logOut = () => {
    setUser("");
  };

  const handleClick = () => {
    if (!user && !url) return;
    if (!user && url) {
      window.location.href = url.toString();
    } else if (user) {
      setOpen(!open);
    }
  };

  return (
    <div className={classes.container} onClick={handleClick}>
      {!user && (
        <div className={classes.googleLogoContainer}>
          <GoogleLogo />
        </div>
      )}
      {user && (
        <div className={classes.profilePic}>
          <Avatar alt={`${user?.name}`} src={`${user.image_url}`} />
        </div>
      )}
      <p className={classes.text}>{!user && !url && "Loading..."}</p>
      <p className={classes.text}>{!user && url && "Sign in with Google"}</p>
      <p className={classes.text}>{user && `${user.name.toLowerCase()}`}</p>

      {user && (
        <div className={classes.arrow}>
          {open ? (
            <ExpandLess color="inherit" />
          ) : (
            <ExpandMore color="inherit" />
          )}
        </div>
      )}
      {open && (
        <div
          className={classes.collapseContainer}
          onClick={() => {
            if (open) setOpen(false);
          }}
        >
          <div className={classes.menuItem}>
            <Link href={`/user/profile`}>
              <a>
                <div className={classes.linkText}>Profile</div>
              </a>
            </Link>
          </div>
          <div className={classes.menuItem} onClick={() => logOut()}>
            <div className={classes.linkText}>Logout</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    minWidth: 200,
    justifyContent: "space-between",
    padding: "1rem 1rem 1rem 0.5rem",
    borderRadius: 5,
    position: "relative",
    cursor: "pointer",
    backgroundColor: (props: { user: any }) => {
      const { user } = props;
      return user ? "inherit" : "white";
    },
  },
  text: {
    color: (props: { user: any }) => {
      const { user } = props;
      return user ? "white" : "black";
    },
    fontSize: 18,
    fontWeight: 500,
    textTransform: "capitalize",
    margin: "0px 10px 0px 5px",
  },
  googleLogoContainer: {
    marginRight: 5,
    width: 20,
    height: 20,
    float: "left",
    display: "flex",
    alignItems: "center",
  },
  profilePic: {
    borderRadius: "50%",
    overflow: "hidden",
    height: 40,
    width: 40,
    display: "flex",
    alignItems: "center",
  },
  arrow: {
    color: "#3798A7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  collapseContainer: {
    position: "absolute",
    top: 50,
    right: 0,
    zIndex: 1000,
    backgroundColor: "#003085",
    color: "white",
    width: "auto",
    display: "flex",
    flexDirection: "column",
  },
  menuItem: {
    width: "100%",
    height: "100%",
    padding: 16,
    borderBottom: "1px solid white",
    color: "white",
    cursor: "pointer",
    textAlign: "center",
    "&:hover": {
      borderBottom: "1px solid #3798A7",
    },
  },
  linkText: {
    color: "white",
    "&:hover": {
      color: "#3798A7",
    },
  },
});

const GoogleLogo = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 256 262"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
    >
      <path
        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
        fill="#4285F4"
      />
      <path
        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
        fill="#34A853"
      />
      <path
        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
        fill="#FBBC05"
      />
      <path
        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
        fill="#EB4335"
      />
    </svg>
  );
};
