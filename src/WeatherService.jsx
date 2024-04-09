const API_key = "6aaf4d99c784f415843505673c081830";
const getIconUrl = (iconId) =>
  `https://openweathermap.org/img/wn/${iconId}@2x.png`;

const getWeatherData = async (city, unit) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=${unit}`;

  const data = await fetch(URL)
    .then((res) => {
      if (!res.ok) {
        throw new Error("unable to fetch data");
      }
      return res.json();
    })
    .then((data) => data)
    .catch((error) => {
      // Handling  errors that occurred during the fetch
      console.error("Fetch error:", error);
    });

  // object destructuring
  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, humidity },
    wind: { speed },
    sys: { country },
    name,
  } = data;
  const { description, icon } = weather[0];

  return {
    description,
    iconURL: getIconUrl(icon),
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    speed,
    country,
    name,
  };
};

export { getWeatherData };
