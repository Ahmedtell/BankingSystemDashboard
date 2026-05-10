import { useEffect, useState } from "react";

function DateTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // Time
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");

      // Date
      const dayName = now.toLocaleDateString("en-US", { weekday: "long" });
      const day = now.getDate();
      const month = now.toLocaleDateString("en-US", { month: "long" });
      const year = now.getFullYear();

      const formatted = `${hours}:${minutes}:${seconds} | ${dayName} ${day} ${month} ${year}`;
      setTime(formatted);
    };

    updateTime(); // أول مرة
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h1>{time}</h1>;
}

export default DateTime;
