import { Typography } from "@material-ui/core";
import { GetServerSideProps } from "next";
import Topbar from "../../../Components/Layout/Topbar/Topbar";

import QuizTest from "../../../Components/QuizTest/QuizTest";
import useLocalState from "../../../custom-hooks/useLocalState";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;

  return {
    props: { quizId: id },
  };
};

interface IProps {
  quizId: number;
}

const Page: React.FC<IProps> = ({ quizId }) => {
  const [user] = useLocalState("user", "");

  return (
    <>
      <Topbar />
      {!user ? (
        <Typography variant="h6" color="error">
          Please Login To Continue
        </Typography>
      ) : (
        <QuizTest quizId={quizId} />
      )}
    </>
  );
};

export default Page;
