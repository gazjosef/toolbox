import {
  WiDaySunny,
  WiNightClear,
  WiDaySunnyOvercast,
  WiNightPartlyCloudy,
  WiCloud,
  WiDayCloudy,
  WiNightCloudy,
  WiRain,
  WiDayShowers,
  WiNightShowers,
  WiThunderstorm,
  WiSnow,
  WiFog,
} from "react-icons/wi";

// Define a type for the icon conversion object
type IconMap = {
  [key: string]: JSX.Element;
};

// Define the icon conversion object
const convertIcon: IconMap = {
  "01d": <WiDaySunny />,
  "02d": <WiDaySunnyOvercast />,
  "03d": <WiCloud />,
  "04d": <WiDayCloudy />,
  "09d": <WiRain />,
  "10d": <WiDayShowers />,
  "11d": <WiThunderstorm />,
  "13d": <WiSnow />,
  "50d": <WiFog />,
  "01n": <WiNightClear />,
  "02n": <WiNightPartlyCloudy />,
  "03n": <WiCloud />,
  "04n": <WiNightCloudy />,
  "09n": <WiRain />,
  "10n": <WiNightShowers />,
  "11n": <WiThunderstorm />,
  "13n": <WiSnow />,
  "50n": <WiFog />,
};

// Define a function to convert the icon
export const iconConverter = (icon: string): JSX.Element | null => {
  return convertIcon[icon] || null;
};
