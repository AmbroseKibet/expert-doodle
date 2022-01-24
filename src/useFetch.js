import { useState, useEffect, useCallback } from "react";
import paginate from "./utils";
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";
const useFetch = () => {
  const [Loading, setLoading] = useState(true);
  const [Items, setItems] = useState([]);
  const getData = useCallback(async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setItems(paginate(data));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    getData();
  }, [getData]);

  return { Loading, Items };
};

export default useFetch;
