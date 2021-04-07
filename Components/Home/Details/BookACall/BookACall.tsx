import { Avatar, Box, withStyles } from "@material-ui/core";
import React from "react";

import texts from "../../../../texts/frontpage";

interface IProps {}

const BookACall: React.FC<IProps> = () => {
  return (
    <Container>
      {/* <Title>B2B Free Session</Title> */}
      <Title>
        Seeing your brand grow is our ultimate goal and satisfaction! We firmly
        believe that with the right training, employees can transform themselves
        into a highly productive asset to the company. It also makes working fun
        and humanizes the culture. By designing and delivering interactive,
        ‘gamified’ and personalized training, we boost employee performance.
        When the employees’ performance improves, the company’s bottom line sees
        the positive impact. So, book your free 1-hour session now!
      </Title>

      <Avatar
        variant="square"
        src="/assets/straight-quotes.png"
        style={{
          height: 15,
          width: 15,
          position: "absolute",
          top: 10,
          left: 10,
        }}
      />

      <a href={`${texts.links.free_1_hour_session}`} target="_blank">
        <Button>Book Your Free 1-Hour Session</Button>
      </a>
    </Container>
  );
};

export default BookACall;

const Container = withStyles({
  root: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
    margin: "0rem 5% 2rem 5%",
    backgroundColor: "white",
    lineHeight: 1.6,
    borderRadius: "10px 10px 10px 0px",
    padding: "1rem",
  },
})(Box);

const Title = withStyles({
  root: {
    color: "#595858",
    fontSize: "1.1rem",
    marginLeft: "1rem",
  },
})(Box);

const Button = withStyles({
  root: {
    color: "white",
    backgroundColor: "#0380A7",
    marginTop: "1rem",
    borderRadius: 50,
    padding: "0.5rem 4rem",
    fontSize: "1.4rem",
    cursor: "pointer",
  },
})(Box);
