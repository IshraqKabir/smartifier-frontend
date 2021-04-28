import {
  Box,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  withStyles,
} from "@material-ui/core";
import {
  BarChartOutlined,
  CheckCircleOutline,
  InfoOutlined,
  WarningOutlined,
} from "@material-ui/icons";

export default function UserDetail({ userInfo, quizOrAssessment }) {
  return (
    <Container>
      <Heading variant="h6">Your Attempts</Heading>
      <UserDetailContainer>
        {userInfo?.attempts_count && (
          <SingleUserDetail>
            <InfoOutlined />
            <UserDetailText>
              You have attempted the quiz <b>{userInfo?.attempts_count}</b> time
              {`${userInfo?.attempts_count == 1 ? "" : "s"}`}.
            </UserDetailText>
          </SingleUserDetail>
        )}
        {userInfo?.best_attempt?.percentage != null && (
          <SingleUserDetail>
            <BarChartOutlined />
            <UserDetailText>
              Your best score for this {quizOrAssessment} is{" "}
              <b>{userInfo?.best_attempt?.percentage}%</b>.
            </UserDetailText>
          </SingleUserDetail>
        )}
        {userInfo?.best_attempt?.has_passed != null && (
          <SingleUserDetail>
            {userInfo?.best_attempt?.has_passed ? (
              <CheckCircleOutline />
            ) : (
              <WarningOutlined />
            )}
            <UserDetailText>
              {userInfo?.best_attempt?.has_passed
                ? `You have already passed this ${quizOrAssessment}!`
                : `You have not passed this ${quizOrAssessment} yet.`}
            </UserDetailText>
          </SingleUserDetail>
        )}
      </UserDetailContainer>

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
    margin: "0.5rem 0 0 0",
  },
})(Typography);

const UserDetailContainer = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: "1rem 0",
  },
})(Box);

const SingleUserDetail = withStyles({
  root: {
    display: "flex",
    alignItems: "center",
    margin: "0.3rem 0",
  },
})(Box);

const UserDetailText = withStyles({
  root: {
    margin: "0 0 0 0.5rem",
    whiteSpace: "nowrap",
  },
})(Typography);
