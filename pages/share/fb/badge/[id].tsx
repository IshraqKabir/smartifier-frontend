import { GetServerSideProps } from "next";

import axios from "axios";
import { local_backend_url } from "../../../../url";

import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;

  const info = await axios({
    method: "get",
    url: `${local_backend_url}/api/share/tests/${id}`,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));

  return {
    props: { info },
  };
};

interface IProps {
  info: any;
}

const Badge: React.FC<IProps> = ({ info }) => {
  return (
    <Head key={`quizzes/${info?.quiz?.id}`}>
      <meta
        property="og:url"
        content={`https://www.smartifier.org/share/fb/badge/${info?.test?.id}`}
      />
      <meta
        property="og:redirect_uri"
        content={`https://www.smartifier.org/quizzes`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${info?.quiz.title}`} />
      <meta
        property="og:description"
        content={`Click Here To Take The Quiz.`}
      />
      <meta
        property="og:image"
        content={`${local_backend_url}/storage/${info?.test?.badge_image_link}`}
      />
    </Head>
  );
};

export default Badge;
