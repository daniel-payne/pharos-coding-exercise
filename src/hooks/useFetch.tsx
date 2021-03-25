import { useState, useEffect } from "react";

function useFetch(
  url: string
): { data: never[]; loading: boolean; error: string | null } {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();

        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUrl();
  }, [url]);

  return { data, loading, error };
}
export default useFetch;
