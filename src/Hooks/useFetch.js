import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState([]);

  useEffect(() => {

    setIsLoading(true)

    async function fetchData() {
      try {
        const response = await axios.get(url);

        setIsLoading(false)


        setData(response.data);

      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url, setData]);

  return { data, error, isLoading };
}

export default useFetch;
