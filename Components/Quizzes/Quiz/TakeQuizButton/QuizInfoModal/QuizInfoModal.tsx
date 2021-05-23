import React from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import zIndexes from "../../../../../theme/zIndexes";
import QuizInfo from "./QuizInfo/QuizInfo";
import { Box } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IProps {
  isModalOpen: boolean;
  closeModal: () => void;
  quizTitle: string;
  quizId: number;
}

export default function QuizInfoModal({
  isModalOpen,
  closeModal,
  quizTitle,
  quizId: quizId,
}: IProps) {
  const classes = useStyles();

  return (
    <div style={{ zIndex: zIndexes.highest }}>
      <Dialog
        fullScreen
        open={isModalOpen}
        onClose={closeModal}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              {quizTitle?.toLocaleLowerCase()}
            </Typography>
            <IconButton color="inherit" onClick={closeModal} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        {/*  */}
        <InnerContainer>
          <QuizInfo quizId={quizId} />
        </InnerContainer>
      </Dialog>
    </div>
  );
}

const InnerContainer = withStyles({
  root: {
    width: "100vw",
    height: "100vh",
    overflowX: "hidden",
    overflowY: "scroll",
    backgroundColor: "#f0f2f5",
  },
})(Box);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: "relative",
      background:
        "transparent linear-gradient(180deg, #003EAA 0%, #002461E0 100%) 0% 0% no-repeat padding-box",
    },
    title: {
      flex: 1,
      textTransform: "capitalize",
    },
  })
);
