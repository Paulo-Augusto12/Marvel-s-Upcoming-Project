import { useEffect, useState } from "react";
import { getData } from "./api/getdata";

interface IMovieDataProps {
  days_until: number;
  overview: string;
  poster_url: string;
  release_date: string;
  title: string;
  following_production: { title: string, poster_url: string  };
}
export function useApp() {
  const [data, setData] = useState<IMovieDataProps>();

  async function GetMoviedata() {
    const movieData = await getData();
    setData(movieData);
  }

  useEffect(() => {
    GetMoviedata();
  }, []);

  return { data };
}
