import { Box, withStyles } from "@material-ui/core";
import React from "react";
import PageTitle from "../../PageTitle/PageTitle";
import FindUsOnFB from "../Intro/FindUsOnFB/FindUsOnFB";
import MentorIntro from "../Intro/MentorIntro/MentorIntro";
import BookACall from "./BookACall/BookACall";
import Clients from "./Clients/Clients";
import Testimonials from "./Testimonials/Testimonials";

interface IProps {}

const Details: React.FC<IProps> = () => {
  return (
    <Container>
      <PageTitle title="" />
      <Clients />
      <MentorIntro />
      <FindUsOnFB />
      <Testimonials />
      <BookACall />
    </Container>
  );
};

export default Details;

const Container = withStyles({
  root: {
    color: "white",
  },
})(Box);
