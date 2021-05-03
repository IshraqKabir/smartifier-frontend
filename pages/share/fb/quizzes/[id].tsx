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
      <meta
        property="og:url"
        content={`https://smartifier.org/share/fb/quizzes/${quiz?.id}`}
      />
      <meta property="og:uri" content={`https://smartifier.org/quizzes`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${quiz?.title}`} />
      <meta property="og:description" content={`${quiz?.description}`} />
      <meta
        property="og:image"
        content={`${local_backend_url}/storage/${image?.image_link}`}
      />
    </Head>
  );
};

export default Quiz;
