import { Box, Divider, Typography, withStyles } from "@material-ui/core";

export default function UserDetail({ userInfo }) {
  return (
    <Container>
      <Heading variant="h6">Your Attempts</Heading>

      <Divider />
    </Container>
  );
}

const Container = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
})(Box);

const Heading = withStyles({
  root: {
    fontWeight: 600,
    margin: "0.5rem 0",
  },
})(Typography);
