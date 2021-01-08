import { makeStyles } from "@material-ui/core";
import React from "react";

import Topbar from "../Layout/Topbar/Topbar";
import Hero from "./Hero/Hero";

const useStyles = makeStyles({
    root: {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#022671',
    }
});

const HomeComponent: React.FC<{}> = () => {
    const classes = useStyles();

    return (<div className={classes.root}>
        <Topbar />
        <Hero />
    </div>)
}

export default HomeComponent;