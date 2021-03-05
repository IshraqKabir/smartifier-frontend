import { GetServerSideProps } from "next";
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

  return <QuizTest id={id} />;
};

export default Post;
