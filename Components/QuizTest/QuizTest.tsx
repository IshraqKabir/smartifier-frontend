import React, { useEffect, useState } from "react";

import postFunc from "../../UtilFunctions/postFunc";

import { local_backend_url } from "../../url";
import axios from "axios";
import useLocalState from "../../custom-hooks/useLocalState";
import ITest from "../../Models/ITest";
import useStartTest from "./useStartTest";
import { Box, CircularProgress, withStyles } from "@material-ui/core";
import PageTitle from "../PageTitle/PageTitle";
import Topbar from "../Layout/Topbar/Topbar";

interface IProps {
  id: number;
}

const QuizTest: React.FC<IProps> = ({ id }) => {
  const [user] = useLocalState("user", "");
  const { test, isLoading, isError } = useStartTest(id);

  return (
    <>
      <Topbar />
      <Container>
        <PageTitle title={isLoading ? "Starting Test..." : test.quiz.title}>
          {isLoading && <CircularProgress />}
        </PageTitle>
      </Container>
    </>
  );
};

export default QuizTest;

const Container = withStyles({
  root: {
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#5D00A5",
    minHeight: "100vh",
  },
})(Box);
