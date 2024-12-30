import  { useEffect, useState } from "react";
import axios from "axios";
export const useFetch = (url) => {
  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios.get(url).then((res) => setApiData(res.data));
  // }, [url]);
  // return apiData;

  useEffect(() => {
    const FetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(url);
        setApiData(res.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    FetchData();
  }, [url]);

  return { apiData, error, loading };
};
