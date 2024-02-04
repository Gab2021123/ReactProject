import { useState, useEffect } from "react";

export const useFetchData = (url = "") => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData(url).then(
      (res) => {
        setData(res);
      },
      (rej) => {
        console.error("Error :", rej);
      }
    );
    return () => {};
  }, []);
  return data;
};
const fetchData = async (ulr = "") => {
  const response = await fetch(ulr);
  const data = await response.json();
  return data;
};
