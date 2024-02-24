// import {
//   useEffect,
//   useRef,
//   useState,
// } from "react";
// ** Import Icons
import { IconContext } from "react-icons";
import {
  FaWind,
  FaThermometerHalf,
  FaWater,
  FaChartLine,
} from "react-icons/fa";
// ** Import Shared Components
import { WeatherData } from "./WeatherApp";
import { iconConverter } from "../Snippets/iconConverter.tsx";

interface CurrentProps {
  weatherData: WeatherData | null;
  city: string;
  country: string;
}

const Current: React.FC<CurrentProps> = ({ weatherData, city, country }) => {
  // TODO : TIME
  const currentTime = Date.now();
  // const [currentTime, setCurrentTime] = useState<number>(Date.now());
  // const intervalRef = useRef<number>();

  // useEffect(() => {
  //   intervalRef.current = window.setInterval(() => {
  //     setCurrentTime(Date.now());
  //   }, 1000);

  //   return () => {
  //     clearInterval(intervalRef.current);
  //   };
  // }, []);

  const currentDate = new Date(currentTime ?? 0);
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
  };

  const directionConverter = (degrees: number): string => {
    const directions: string[] = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

    let direction = (degrees * 8) / 360;
    direction = Math.round(direction);
    direction = (direction + 8) % 8;

    return directions[direction];
  };

  if (!weatherData) {
    return <div>Loading...</div>;
  } else {
    // console.log("weatherData", weatherData);
  }

  return (
    <div className="current | bg-sky-500 h-[250px] w-full border-solid rounded-[10px] overflow-hidden | text-slate-50">
      <section className="h-[170px] p-[15px] | grid grid-cols-2 gap-1	">
        <div>
          <IconContext.Provider
            value={{
              className: "font-semibold	text-[100px] text-white",
            }}
          >
            {iconConverter(weatherData.weather[0].icon)}
          </IconContext.Provider>
          <span className="text-center uppercase">
            <h2 className="font-semibold	text-[14px] text text-center">
              {city}, {country}
            </h2>
          </span>
        </div>

        <div className="flex flex-col gap-1 items-center justify-center | text-[14px] text-center">
          <h2>{currentDate.toLocaleDateString(undefined, options)}</h2>
          <span className="text-[25px]">
            <h2>{Math.floor(weatherData.main.temp)}&#8451;</h2>
          </span>
          <h2>{weatherData.weather[0].description}</h2>
        </div>
      </section>

      <section className="h-[40px] border-t-[1px] border-solid | flex | text-[10px]">
        <section className="w-full | flex items-center justify-center">
          <div className="mr-[15px]">
            <FaWind fontSize="1.2rem" />
          </div>
          <div>
            <div>{directionConverter(weatherData.wind.deg)} Wind</div>
            <div>{weatherData.wind.speed} km/h</div>
          </div>
        </section>

        <section className="w-full | flex items-center justify-center">
          <section className="mr-[15px]">
            <FaThermometerHalf fontSize="1.2rem" />
          </section>
          <div>
            <div>Feels Like</div>
            <div>{weatherData.main.feels_like}&#8451;</div>
          </div>
        </section>
      </section>

      <section className="h-[40px] border-t-[1px] border-solid | flex | text-[10px]">
        <section className="w-full | flex items-center justify-center">
          <div className="mr-[15px]">
            <FaWater fontSize="1.2rem" />
          </div>
          <div>
            <div>Humidity</div>
            <div>{weatherData.main.humidity} %</div>
          </div>
        </section>

        <section className="w-full | flex items-center justify-center">
          <div className="mr-[15px]">
            <FaChartLine fontSize="1.2rem" />
          </div>
          <div>
            <div>Pressure</div>
            <div>{weatherData.main.pressure} hPa</div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Current;
