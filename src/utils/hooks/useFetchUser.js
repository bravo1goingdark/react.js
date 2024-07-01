import { useEffect, useState } from "react";

export const useFetchUser = (id) => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState();

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((err) => setError(err))
      .finally(() => {
        setLoading(false);
      });

    return () => {
      controller.abort();
      setLoading(false);
    };
  }, [id]);

  return { fetchedUser: userData, loading, err };
};
