import { useState, useEffect, FC } from "react";
import { IconContext } from "react-icons";
import { FaSearch } from "react-icons/fa";

// import Current from "./Forecast/Current";
// import Future from "./Forecast/Future";

interface Clouds {
  all: number | null;
}

interface Coord {
  lon: number | null;
  lat: number | null;
}

interface Main {
  feels_like: number | null;
  humidity: number | null;
  pressure: number | null;
  temp: number | null;
  temp_min: number | null;
  temp_max: number | null;
}

interface Rain {
  "1h": number | null;
}

interface Sys {
  type: number | null;
  id: number | null;
  country: string | null;
  sunrise: number | null;
  sunset: number | null;
}

interface Weather {
  description: string | null;
  icon: string | null;
  id: number | null;
  main: string | null;
}

interface Wind {
  speed: number | null;
  deg: number | null;
  gust: number | null;
}

interface ForecastData {
  base: string;
  clouds: Clouds;
  cod: number | null;
  coord: Coord;
  dt: number | null;
  id: number | null;
  main: Main;
  name: string | null;
  rain: Rain;
  sys: Sys;
  timezone: number | null;
  visibility: number | null;
  weather: Weather[];
  wind: Wind;
}

interface FutureForecastData {
  list: ForecastData[];
}

const API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;

const WeatherApp: FC = () => {
  const [city, setCity] = useState<string>("sydney");
  const [country, setCountry] = useState<string>("au");

  const [currentForecast, setCurrentForecast] = useState<ForecastData>({
    base: "stations",
    clouds: { all: null },
    cod: null,
    coord: { lon: null, lat: null },
    dt: null,
    id: null,
    main: {
      feels_like: null,
      humidity: null,
      pressure: null,
      temp: null,
      temp_min: null,
      temp_max: null,
    },
    name: null,
    rain: { "1h": null },
    sys: { type: null, id: null, country: null, sunrise: null, sunset: null },
    timezone: null,
    visibility: null,
    weather: [{ description: null, icon: null, id: null, main: null }],
    wind: { speed: null, deg: null, gust: null },
  });

  const [futureForecast, setFutureForecast] = useState<ForecastData[]>([]);

  useEffect(() => {
    const getCurrentData = async () => {
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
      );
      const data: ForecastData = await api_call.json();

      setCurrentForecast(data);

      console.log("Set Weather Data", data);
    };
    getCurrentData();
  }, [city, country]);

  useEffect(() => {
    const getFutureData = async () => {
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=sydney,nsw&appid=${API_KEY}`
      );
      const futureData: FutureForecastData = await api_call.json();

      setFutureForecast(futureData.list.slice(0, 5));

      console.log("Get Future Data", futureData.list.slice(0, 5));
    };
    getFutureData();
  }, []);

  const getWeather = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const city = e.currentTarget.elements.city.value;
    const country = e.currentTarget.elements.country.value;

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const currentForecastData: ForecastData = await api_call.json();

    console.log("Get Current Forecast Data", currentForecastData);

    setCurrentForecast(currentForecastData);

    setCity(currentForecastData.name);
    setCountry(currentForecastData.sys.country);

    const api_call2 = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}`
    );
    const futureForecastData: FutureForecastData = await api_call2.json();

    console.log(
      "Get Future Forecast Data",
      futureForecastData.list.slice(0, 5)
    );

    setFutureForecast(futureForecastData.list.slice(0, 5));
  };

  return (
    <div className="bg-slate-50 h-full py-[20px] px-[10px] | flex flex-col items-center	justify-between">
      <form
        onSubmit={getWeather}
        className="weather-app__title | bg-sky-500 border-2 border-solid rounded-[5px] w-full | flex items-center overflow-hidden"
      >
        <input
          type="text"
          name="city"
          placeholder="E.g Sydney.."
          className="w-full p-[6px]"
        />
        <input
          type="text"
          name="country"
          placeholder="E.g AU.."
          className="w-full p-[6px]"
        />
        <button type="submit">
          <IconContext.Provider
            value={{ className: "h-[15px] w-[25px] text-white" }}
          >
            <FaSearch />
          </IconContext.Provider>
        </button>
      </form>

      {/* <SearchBar /> */}

      <Current
        currentForecast={currentForecast}
        city={city}
        country={country}
      />

      <Future futureForecast={futureForecast} />
    </div>
  );
};

export default WeatherApp;
