import axios from "axios";
import { useEffect, useState } from "react";
import { local_backend_url } from "../url";

const initialState = {
  posts: [],
  topics: [],
  tags: [],
};

export default function useSearch(url: String, query: String) {
  const [data, setData] = useState({ ...initialState });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setData({ ...initialState });
  }, [query]);

  useEffect(() => {
    if (!query) return () => {};

    setLoading(true);
    setError(false);

    let cancel: Function;

    axios({
      method: "GET",
      url: `${local_backend_url}${url}`,
      params: { query: query },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => {
        setData(res.data);
        console.log(res.data);

        setLoading(false);
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;
        setError(true);
      });

    return () => {
      cancel();
    };
  }, [query]);

  return { data, loading, error };
}
