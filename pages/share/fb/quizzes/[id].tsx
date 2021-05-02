import { GetServerSideProps } from "next";

import IQuiz from "../../../../Models/IQuiz";
import IImage from "../../../../Models/IImage";

import axios from "axios";
import { local_backend_url } from "../../../../url";

import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;

  const quiz: IQuiz = await axios({
    method: "get",
    url: `${local_backend_url}/api/quizzes/${id}`,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));

  const image: IImage = quiz?.image;

  return {
    props: { quiz, image },
  };
};

interface IProps {
  quiz: IQuiz;
  image: IImage;
}

const Quiz: React.FC<IProps> = ({ quiz, image }) => {
  return (
    <Head key={`quizzes/${quiz.id}`}>
      <meta property="og:url" content={`https://www.smartifier.org/quizzes`} />
      <meta property="og:type" content="article" />
      <meta property="fb:app_id" content={`${process.env.FB_APP_ID}`} />
      {quiz?.title && <meta property="og:title" content={`${quiz?.title}`} />}
      {quiz?.description && (
        <meta property="og:description" content={`${quiz?.description}`} />
      )}
      {image?.image_link && (
        <meta
          property="og:image"
          content={`${local_backend_url}/storage/${image?.image_link}`}
        />
      )}
    </Head>
  );
};

export default Quiz;
