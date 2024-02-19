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

export const iconConverter = (icon) => {
  const convertIcon = {
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
  return convertIcon[icon];
};
