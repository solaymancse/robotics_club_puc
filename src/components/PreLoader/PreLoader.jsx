import { useState, useEffect } from "react";
import { HomePage } from "../../pages/HomePage";
import { Spiner } from "./Spiner";

export const PreLoader = () => {
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, 3000);
  }, []);
  return <div>{!done ? <Spiner /> : <HomePage />}</div>;
};
