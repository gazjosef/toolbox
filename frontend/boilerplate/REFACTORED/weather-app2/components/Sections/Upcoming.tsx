import React from "react";
import { UpcomingData } from "./WeatherApp";
// import { IconContext } from "react-icons";
// import { iconConverter } from "../iconConverter";

// interface HourlyForecast {
//   dt: number;
//   weather: { icon: string }[];
//   main: { temp: number };
// }

interface UpcomingProps {
  upcomingData: UpcomingData | null;
}

const Upcoming: React.FC<UpcomingProps> = ({ upcomingData }) => {
  return (
    <div className="h-[100px] w-full | flex flex-col justify-between">
      <h1 className="text-sm text-left">Hourly Forecast</h1>
      <div className="daily__hours | flex items-center justify-between"></div>
    </div>
  );
};

export default Upcoming;
