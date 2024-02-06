// import { useState, useEffect, FC } from "react";
// import { IconContext } from "react-icons";
// import { FaSearch } from "react-icons/fa";

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

// interface FutureForecastData {
//   list: ForecastData[];
// }

// const API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;

const WeatherApp: React.FC = () => {
  return <h1>Hello World</h1>;
};

export default WeatherApp;
