import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import MentorIntro from "./MentorIntro/MentorIntro";
import FindUsOnFB from "./FindUsOnFB/FindUsOnFB";
import PageTitle from "../../PageTitle/PageTitle";

const useStyles = makeStyles({
  outerContainer: {
    width: "100vw",
    backgroundColor: "#01176C",
    position: "relative",
  },
  polygonBackground: {
    width: "100vw",
    height: 411,
    background:
      "transparent linear-gradient(180deg, #028D9ADE 0%, #8F749CE6 100%) 0% 0% no-repeat padding-box",
    clipPath:
      "polygon(0% 0%, 0% 100%, 15% 80%, 30% 90%, 45% 80%, 60% 90%, 75% 75%, 90% 95%, 100% 100%, 100% 0%)",
    zIndex: -1,
  },
  container: {
    width: "100vw",
    top: 0,
    left: 0,
  },
  titleContainer: {
    marginTop: "3rem",
    color: "white",
    textAlign: "center",
  },
  mainContainer: {
    paddingLeft: "5%",
    paddingRight: "5%",
    width: "100%",
  },
  blocks: {
    display: "flex",
    alignItems: "center",
    width: "95%",
    flexWrap: "wrap",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "4rem",
  },
  block: {
    background: "#FFFFFFDB 0% 0% no-repeat padding-box",
    border: "1px solid #707070",
    borderRadius: 45,
    opacity: 1,
    width: "33%",
    minWidth: 300,
    height: 300,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const Intro: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <PageTitle title="Message from Mentor" />
      <div className={classes.mainContainer}>
        {/* <div className={classes.blocks}>
            <div className={classes.block}>Hello</div>
            <div className={classes.block}>Hello</div>
            <div className={classes.block}>Hello</div>
          </div> */}
        <MentorIntro />
        <FindUsOnFB />
      </div>
    </div>
  );
};

export default Intro;
