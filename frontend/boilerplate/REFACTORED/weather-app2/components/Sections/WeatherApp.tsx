import {
  useState,
  useEffect,
  // FormEvent
} from "react";
import axios from "axios";
// ** Import Icons
import { IconContext } from "react-icons";
import { FaSearch } from "react-icons/fa";

// ** Import Shared Components
import Current from "../Sections/Current";
import Upcoming from "../Sections/Upcoming";

export interface WeatherData {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  name: string;
  rain: {
    [key: string]: number;
  };
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  weather: Array<{
    description: string;
    icon: string;
    id: number;
    main: string;
  }>;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
}

// interface CurrentForecastData {
//   base: string;
//   clouds: {
//     all: number | null;
//   };
//   cod: number | null;
//   coord: {
//     lon: number | null;
//     lat: number | null;
//   };
//   dt: number | null;
//   id: number | null;
//   main: {
//     feels_like: number | null;
//     humidity: number | null;
//     pressure: number | null;
//     temp: number | null;
//     temp_min: number | null;
//     temp_max: number | null;
//   };
//   name: string | null;
//   rain: {
//     [key: string]: number;
//   } | null;
//   sys: {
//     type: number | null;
//     id: number | null;
//     country: string | null;
//     sunrise: number | null;
//     sunset: number | null;
//   };
//   timezone: number | null;
//   visibility: number | null;
//   weather: Array<{
//     description: string | null;
//     icon: string | null;
//     id: number | null;
//     main: string | null;
//   }>;
//   wind: {
//     speed: number | null;
//     deg: number | null;
//     gust: number | null;
//   };
// }

const WeatherApp: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [city, setCity] = useState<string>("sydney");
  const [country, setCountry] = useState<string>("au");
  const API_KEY: string = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

  useEffect(() => {
    async function fetchWeather(): Promise<void> {
      try {
        const response = await axios.get<WeatherData>(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }

    fetchWeather();
  }, [city, country, API_KEY]);

  // setCity("sydney");
  // setCountry("au");

  console.log("weatherData", weatherData);
  return (
    <div className="bg-slate-50 h-full py-[20px] px-[10px] | flex flex-col items-center	justify-between">
      <form
        // onSubmit={fetchWeather}
        className="weather-app__title |  border-2 border-solid rounded-[5px] w-full | flex items-center overflow-hidden"
      >
        <input
          type="text"
          name="city"
          placeholder="E.g Sydney.."
          className="w-full p-[6px] text-xs"
        />
        <input
          type="text"
          name="country"
          placeholder="E.g AU.."
          className="w-full p-[6px] text-xs"
        />
        <button type="submit" className="bg-sky-500 rounded-[5px] ">
          <IconContext.Provider
            value={{ className: "h-[15px] w-[15px] text-white" }}
          >
            <FaSearch />
          </IconContext.Provider>
        </button>
      </form>

      <Current weatherData={weatherData} />

      <Upcoming />
    </div>
  );
};

export default WeatherApp;
