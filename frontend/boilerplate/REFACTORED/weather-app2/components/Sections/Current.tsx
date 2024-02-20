import { useEffect, useState } from "react";
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
  weatherData: WeatherData | null;
  city: string;
  country: string;
}

const Current: React.FC<CurrentProps> = ({ weatherData, city, country }) => {
  const [time, setTime] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const currentDate = new Date(time ?? 0);
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
  };

  // const directionConverter = (degrees: number): string => {
  //   const directions: string[] = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

  //   let direction = (degrees * 8) / 360;
  //   direction = Math.round(direction);
  //   direction = (direction + 8) % 8;

  //   return directions[direction];
  // };
  // console.log("currentDate", currentDate);
  // console.log("options", options);
  // console.log("directionConverter", directionConverter);
  console.log("weatherData", weatherData);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="current | bg-sky-500 h-[250px] w-full border-solid rounded-[10px] overflow-hidden | text-slate-50">
      <section className="h-[170px] p-[15px] | grid grid-cols-2	">
        <div>
          <span className="text-center uppercase">
            <h2 className="font-semibold	text-[14px] text text-center">
              {city}, {country}
            </h2>
          </span>
        </div>

        <div className="flex flex-col items-center justify-center | text-[14px] text-center">
          <h2>{time && currentDate.toLocaleTimeString()}</h2>
          <h2>{time && currentDate.toLocaleDateString(undefined, options)}</h2>
          {/* <span className="text-[25px]">
            <h2>{Math.floor(currentForecast.main.temp)}&#8451;</h2>
          </span>
          <h2>{currentForecast.weather[0].description}</h2> */}
        </div>
      </section>
    </div>
  );
};

export default Current;
