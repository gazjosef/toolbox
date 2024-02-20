import React from "react";
import { WeatherData } from "./WeatherApp";
// import { IconContext } from "react-icons";
// import {
//   FaWind,
//   FaThermometerHalf,
//   FaWater,
//   FaChartLine,
// } from "react-icons/fa";
// import { iconConverter } from "./iconConverter.js";

interface CurrentProps {
  weatherData: WeatherData;
}

const Current: React.FC<CurrentProps> = ({ weatherData }) => {
  // const [time, setTime] = useState<number | null>(null);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTime(Date.now());
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  // const currentDate = new Date(time ?? 0);
  // const options: Intl.DateTimeFormatOptions = {
  //   month: "long",
  //   day: "numeric",
  // };

  const directionConverter = (degrees: number): string => {
    const directions: string[] = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

    let direction = (degrees * 8) / 360;
    direction = Math.round(direction);
    direction = (direction + 8) % 8;

    return directions[direction];
  };
  // console.log("currentDate", currentDate);
  // console.log("options", options);
  console.log("directionConverter", directionConverter);

  return (
    <div className="current | bg-sky-500 h-[250px] w-full border-solid rounded-[10px] overflow-hidden | text-slate-50">
      <h1 className="text-sm text-left">Current</h1>
      <p>{weatherData.name}</p>
    </div>
  );
};

export default Current;
