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
  upcomingData: UpcomingData[] | null;
}

const Upcoming: React.FC<UpcomingProps> = ({ upcomingData }) => {
  // const timeConverter = (UNIX_timestamp: number): string => {
  //   const a = new Date(UNIX_timestamp * 1000);

  //   const hour: number = a.getHours();
  //   const min: string = ("0" + a.getMinutes()).slice(-2);
  //   const time: string = hour + ":" + min;

  //   return time;
  // };

  // DISPLAY FUTURE DATA
  const displayHour = upcomingData?.map((hour, index) => {
    console.log("hour", hour);
    return (
      <div
        key={index}
        className="hour | bg-sky-500 w-[35px] h-[70px] p-[5px] border-solid rounded-[10px] | flex flex-col items-center justify-between | text-[9px] text-white"
      >
        {/* <div>{timeConverter(hour.dt)}</div>

          {hour.weather[0].icon}

        <div>{JSON.stringify(hour.main.temp - 273.15).slice(0, 2)}&#8451;</div> */}
      </div>
    );
  });

  return (
    <div className="h-[100px] w-full | flex flex-col justify-between">
      <h1 className="text-sm text-left">Hourly Forecast</h1>
      <div className="daily__hours | flex items-center justify-between">
        {displayHour}
      </div>
    </div>
  );
};

export default Upcoming;
