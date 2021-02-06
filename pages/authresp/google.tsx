import React, { useEffect } from "react";

import { useRouter } from "next/router";
import axios from "axios";
import post from "../../UtilFunctions/post";
import { backend_url } from "../../url";
import useLocalState from "../../custom-hooks/useLocalState";

interface IProps {}

const Google: React.FC<IProps> = () => {
  const router = useRouter();
  const { code } = router.query;

  const [user, setUser] = useLocalState<any>("user", "");

  useEffect(() => {
    if (code) {
      axios({
        method: "get",
        url: `/api/auth/google?get=user&code=${code}`,
      }).then((res) => {
        const id_token = res.data.user.data.id_token;

        post(
          `${backend_url}/api/auth/google/verify`,
          { id_token: id_token, code: code },
          (response: any) => {
            setUser(response.data);
          },
          () => {
            setUser("");
          }
        );
      });
    }
  }, [code]);

  return <p>hello</p>;
};

export default Google;
