import { GetServerSideProps } from "next";
import CheckTestStatus from "../../../Components/QuizTest/CheckTestStatus/CheckTestStatus";
import QuizTest from "../../../Components/QuizTest/QuizTest";
import useLocalState from "../../../custom-hooks/useLocalState";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;

  return {
    props: { id },
  };
};

interface IProps {
  id: number;
}

const Post: React.FC<IProps> = ({ id }) => {
  const [user] = useLocalState("user", "");

  if (!user.token) return <p>Unauthorized access</p>;

  return <CheckTestStatus quizID={id} />;
};

export default Post;
