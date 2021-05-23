import { Typography } from "@material-ui/core";
import { GetServerSideProps } from "next";
import Topbar from "../../../Components/Layout/Topbar/Topbar";
import QuizTestResult from "../../../Components/QuizTestResult/QuizTestResult";
import useLocalState from "../../../custom-hooks/useLocalState";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;

  return {
    props: { testId: id },
  };
};

interface IProps {
  testId: number;
}

export default function Page({ testId }: IProps) {
  const [user] = useLocalState("user", "");

  return (
    <div>
      <Topbar />
      {!user ? (
        <Typography variant="h6" color="error">
          Please Login To Continue
        </Typography>
      ) : (
        <QuizTestResult testId={testId} />
      )}
    </div>
  );
}
