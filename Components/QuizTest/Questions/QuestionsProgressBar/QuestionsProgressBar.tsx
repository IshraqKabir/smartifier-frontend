import { Box, makeStyles, withStyles } from "@material-ui/core";

interface IProps {
  progress: number;
}

export default function QuestionsProgressBar({ progress }: IProps) {
  const classes = useStyles({ progress });
  return (
    <div className={classes?.container}>
      <div className={classes?.progress}></div>
    </div>
  );
}

const useStyles = makeStyles({
  container: {
    width: "100%",
    backgroundColor: "#d7d7dc",
    margin: 0,
  },
  progress: {
    width: ({ progress }: { progress: number }) => {
      return `${progress}%`;
    },
    padding: "0.5rem 0",
    transition: "width 0.5s ease-in-out",
    background:
      "transparent linear-gradient(180deg, #003EAA 0%, #002461E0 100%) 0% 0% no-repeat padding-box",
  },
});
