import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    height: 600,
    padding: "5%",
    color: "white",
    background:
      "transparent linear-gradient(180deg, #000266 0%, #032C73 57%, #00163B 100%, #003A67 100%) 0% 0% no-repeat padding-box",
  },
  description: {
    marginTop: 50,
    fontSize: "small",
  },
  buttons: {
    marginTop: 40,
    display: "flex",
  },
  button: {
    fontSize: "small",
    background: "#0380A7 0% 0% no-repeat padding-box",
    padding: "10px 30px 10px 30px",
    marginRight: 20,
    borderRadius: 50,
  },
});

const useContentStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "40%",
  },
});

const Hero: React.FC<{}> = () => {
  const classes = useStyles();
  const contentStyles = useContentStyles();

  return (
    <div className={classes.root}>
      <div className={contentStyles.root}>
        <Typography component="h1" variant="h4">
          Why{" "}
          <span style={{ color: "#5AB4E2", fontWeight: "bold" }}>
            Smartifier
          </span>
        </Typography>
        <div className={classes.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nihil
          eum totam aspernatur voluptate, molestiae expedita aliquid dolores
          explicabo quae rerum, alias minima obcaecati nostrum maxime dolorum.
          Iusto harum cumque aut exercitationem velit impedit vel alias iste
          accusamus laudantium vero eum rerum, ex culpa, perspiciatis quis ipsa
          atque, earum quisquam.
        </div>
        <div className={classes.buttons}>
          <div className={classes.button}>Talk to us</div>
          <div className={classes.button}>All Courses</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
