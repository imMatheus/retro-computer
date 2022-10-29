import React, { useEffect, useState } from "react";

const Clock: React.FC = ({}) => {
  const [date, setDate] = useState(new Date());
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const time =
    hours < 10
      ? "0" + hours
      : hours + ":" + (minutes < 10 ? "0" + minutes : minutes);
  // ":" +
  // (seconds < 10 ? "0" + seconds : seconds);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://github.com/");
      const data = await res.json();
      console.log(data);
    }

    // getData();
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div className="border-outset px-1 text-sm shadow-inner">{time}</div>;
};

export default Clock;
