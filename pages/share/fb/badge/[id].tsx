import { GetServerSideProps } from "next";

import axios from "axios";
import { local_backend_url } from "../../../../url";

import Head from "next/head";
import { CircularProgress } from "@material-ui/core";
import { useRouter } from "next/router";
import { useEffect } from "react";

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
  testId: number;
}

const Badge: React.FC<IProps> = ({ info, testId }) => {
  const router = useRouter();

  useEffect(() => {}, []);

  return (
    <>
      <Head key={`quizzes/${info?.quiz?.id}`}>
        <meta
          property="og:url"
          content={`https://www.smartifier.org/share/fb/badge/${testId}`}
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
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />
      </Head>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </div>
    </>
  );
};

export default Badge;
