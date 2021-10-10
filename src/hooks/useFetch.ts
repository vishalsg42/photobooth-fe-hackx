import { useCallback, useEffect, useState } from "react";

const useFetch = ({
  immediate = false,
  url = "",
  payload = {},
  method = "GET",
  headers = {},
}: any) => {
  const [loading, setLoading]: any = useState(false);
  const [error, setError]: any = useState(null);
  const [data, setData]: any = useState(null);

  const handler = useCallback(
    async (params?: any) => {
      const { payload: body } = params || {};

      const py: any = {};
      py.method = method;
      py.headers = headers;

      if (body) py.body = body;

      if (url) {
        setLoading(true);
        fetch(url, py)
          .then((d) => d && d.json())
          .then((d) => {
            setLoading(false);
            setData(d);
          })
          .catch((e) => {
            setLoading(false);
            setError(e);
          });
      }
    },
    [url, method, headers]
  );

  useEffect(() => {
    immediate && handler({ payload });
  }, [immediate, handler, payload]);

  return {
    loading,
    data,
    error,
    handler,
  };
};

export default useFetch;
