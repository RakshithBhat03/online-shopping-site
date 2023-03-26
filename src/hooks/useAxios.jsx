import axios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (axiosParams) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const fetchData = async (axiosParams) => {
    setIsLoading(true);
    try {
      const result = await axios.request(axiosParams);
      setData(result.data);
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData(axiosParams);
  }, []);

  return { data, isLoading, isError };
};
