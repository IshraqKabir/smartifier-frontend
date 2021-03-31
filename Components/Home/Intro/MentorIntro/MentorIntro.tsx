import { Avatar, Box, withStyles } from "@material-ui/core";
import React from "react";

import texts from "../../../../texts/frontpage";

interface IProps {}

const MentorIntro: React.FC<IProps> = () => {
  return (
    <Container>
      <LeftSide>
        <Title>Hello,</Title>
        <Title>{texts.message_from_mentor_title}</Title>
        <MessageContainer>
          {texts.message_from_mentor_messages.map((message) => {
            return <Message>{message}</Message>;
          })}
        </MessageContainer>
        <a href={`${texts.links.need_assessment_call}`} target="_blank">
          <Button>Book your Need Assessment Phone Call</Button>
        </a>
      </LeftSide>
      <RightSide>
        <Avatar
          src={`/assets/mentor_image.png`}
          variant="square"
          style={{
            height: "70%",
            width: "70%",
          }}
        />
      </RightSide>
    </Container>
  );
};

export default MentorIntro;

const Container = withStyles({
  root: {
    color: "#5E5E5E",
    background: "#FFFFFFD1 0% 0% no-repeat padding-box",
    minHeight: 100,
    border: "1px solid #707070",
    borderRadius: "94px 94px 94px 0px",
    padding: "2rem 5rem",
    display: "flex",
    alignItems: "center",
    fontSize: "1.1rem",
    marginBottom: "2rem",
    cursor: "pointer",
  },
})(Box);

const LeftSide = withStyles({
  root: {
    maxWidth: "80ch",
    flexShrink: 2,
  },
})(Box);

const Title = withStyles({
  root: {
    fontWeight: 700,
  },
})(Box);

const MessageContainer = withStyles({
  root: {
    marginTop: "2rem",
  },
})(Box);

const Message = withStyles({
  root: {
    fontWeight: 500,
    marginBottom: "1rem",
    lineHeight: 1.6,
  },
})(Box);

const Button = withStyles({
  root: {
    display: "inline-block",
    background: "#0380A7",
    borderRadius: 50,
    padding: "1rem 2rem",
    color: "white",
  },
})(Box);

const RightSide = withStyles({
  root: {
    marginLeft: "10%",
    flexShrink: 1,
    ["@media (max-width: 800px)"]: {
      display: "none",
    },
  },
})(Box);
