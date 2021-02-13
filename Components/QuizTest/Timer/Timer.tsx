import { Box, makeStyles, Typography, withStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";

interface IProps {
  start_time: string;
  duration: string;
}

const Timer: React.FC<IProps> = ({ start_time, duration }) => {
  const [secondsRemaining, setSecondsRemaining] = useState<number>(
    getTimeRemainingInSeconds(start_time, duration)
  );

  const [timeRemaining, setTimeRemaing] = useState<string>("");
  const [percentage, setPercentage] = useState<number>(
    getPercentage(start_time, duration)
  );

  const classes = useStyles({ percentage });

  useEffect(() => {
    setInterval(() => {
      setSecondsRemaining(getTimeRemainingInSeconds(start_time, duration));
    }, 500);
  }, []);

  useEffect(() => {
    if (secondsRemaining <= 0) {
      setTimeRemaing("Test Finished");
    } else {
      setPercentage(getPercentage(start_time, duration));
      setTimeRemaing(parseSecondsToClock(secondsRemaining));
    }
  }, [secondsRemaining]);

  return (
    <Container>
      <div className={classes.loader}>
        <Time variant="h6">{`${timeRemaining}`}</Time>
      </div>
    </Container>
  );
};

export default Timer;

const Container = withStyles({
  root: {
    position: "fixed",
    bottom: 0,
    left: 0,
    textAlign: "center",
    right: 0,
    backgroundColor: "transparent",
    fontWeight: "bold",
  },
})(Box);

const useStyles = makeStyles({
  loader: {
    display: "relative",
    background:
      "transparent linear-gradient(180deg, #003EAA 0%, #002461E0 100%) 0% 0% no-repeat padding-box",
    opacity: 1,
    width: (props: { percentage: number }) => {
      const { percentage } = props;

      return `${percentage}%`;
    },
  },
});

const Time = withStyles({
  root: {
    color: "white",
    opacity: 1,
  },
})(Typography);

function getTimeRemainingInSeconds(
  start_time: string,
  duration: string
): number {
  const totalDurationInSeconds: number = getSecondsFromDuration(duration);

  const start = new Date(`${start_time}`);
  const now = new Date();
  const end = new Date(`${start_time}`);
  end.setTime(start.getTime() + totalDurationInSeconds * 1000);

  const secondsLeft: number = (end.getTime() - now.getTime()) / 1000;

  return Math.floor(secondsLeft);
}

function getSecondsFromDuration(duration: string): number {
  const [hours, mins, seconds] = duration.split(":");

  let totalSeconds: number = 0;
  totalSeconds += parseInt(hours) * 60 * 60;
  totalSeconds += parseInt(mins) * 60;
  totalSeconds += parseInt(seconds);

  return totalSeconds;
}

function parseSecondsToClock(secondsRemaining: number): string {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = Math.floor(secondsRemaining % 60);

  return `${mins < 10 ? `0${mins}` : mins}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
}

function getPercentage(start_time: string, duration: string): number {
  const totalDurationInSeconds: number = getSecondsFromDuration(duration);

  const start = new Date(`${start_time}`);
  const now = new Date();
  const end = new Date(`${start_time}`);
  end.setTime(start.getTime() + totalDurationInSeconds * 1000);

  const percentage: number =
    (now.getTime() - start.getTime()) / (totalDurationInSeconds * 10);

  return percentage + 1;
}
