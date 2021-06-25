import clear from "../images/Clear.png";
import hail from "../images/Hail.png";
import heavyCloud from "../images/HeavyCloud.png";
import heavyRain from "../images/HeavyRain.png";
import lightCloud from "../images/LightCloud.png";
import lightRain from "../images/LightRain.png";
import shower from "../images/Shower.png";
import sleet from "../images/Sleet.png";
import snow from "../images/Snow.png";
import thunderstorm from "../images/Thunderstorm.png";

const CORS_URL = "https://api.allorigins.win/raw?url=";
const PATH_URL = `${CORS_URL}https://www.metaweather.com/api`;

const WEATHER_STATUS = {
  c: clear,
  h: hail,
  hc: heavyCloud,
  hr: heavyRain,
  lc: lightCloud,
  lr: lightRain,
  s: shower,
  sn: snow,
  sl: sleet,
  t: thunderstorm,
};

export { CORS_URL, PATH_URL, WEATHER_STATUS };
