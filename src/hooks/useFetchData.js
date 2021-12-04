import { useState, useEffect } from 'react';
import axios from "axios";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      try{
        const data = await axios.get(url);
        setData(data.data);
      } catch (err) {
        console.error(err);
      }      
    }

    fetchData();
  }, [url]);

  return {  data };
};

export default useFetchData;