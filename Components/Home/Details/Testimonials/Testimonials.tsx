import { Avatar, Box, withStyles } from "@material-ui/core";
import React from "react";

import texts from "../../../../texts/frontpage";

interface IProps {}

const Testimonials: React.FC<IProps> = () => {
  return (
    <Container>
      {texts.testimonials.map((testimonial) => {
        return (
          <TestimonialContainer>
            <Message>{testimonial?.message}</Message>
            <Person>
              <Avatar
                src={testimonial?.person?.image_link}
                style={{
                  height: 50,
                  width: 50,
                  marginRight: "0.7rem",
                }}
              />
              <div>
                <Name>{testimonial?.person?.name}</Name>
                {testimonial?.person?.professions.map((profession) => {
                  return <div>{profession}</div>;
                })}
              </div>
            </Person>
            <Avatar
              variant="square"
              src="/assets/straight-quotes.png"
              style={{
                height: 15,
                width: 15,
                position: "absolute",
                top: 20,
              }}
            />
          </TestimonialContainer>
        );
      })}
    </Container>
  );
};

export default Testimonials;

const Container = withStyles({
  root: {
    margin: "4rem 5%",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "stretch",
    justifyContent: "space-between",
    color: "#595858",
    ["@media (max-width: 750px)"]: {
      flexDirection: "column",
    },
  },
})(Box);

const TestimonialContainer = withStyles({
  root: {
    backgroundColor: "white",
    position: "relative",
    width: "24%",
    borderRadius: 20,
    padding: "1rem",
    border: "1px solid #707070",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexShrink: 0,
    ["@media (max-width: 750px)"]: {
      width: "100%",
      marginTop: "1rem",
    },
  },
})(Box);

const Message = withStyles({
  root: {
    color: "#595858",
    lineHeight: 1.8,
    fontSize: "1rem",
    marginLeft: "1rem",
    marginTop: "1rem",
  },
})(Box);

const Person = withStyles({
  root: {
    display: "flex",
    alignItems: "center",
    marginTop: "2rem",
    fontSize: "0.8rem",
    overflow: "hidden",
  },
})(Box);

const Name = withStyles({ root: { fontWeight: 600 } })(Box);
