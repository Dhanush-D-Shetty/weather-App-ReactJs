import React, { useEffect, useState } from 'react'
import coldBg from './assets/cold.jpeg'
import hotBg from './assets/hot.jpg'
import "./App.css";
import Description from './components/Description';
import { getWeatherData } from './WeatherService';
import Nav from './components/Nav';


const App = () => {
  const [Bg, setBg] = useState(hotBg);
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("shimoga");
  const [units, setUnits] = useState("metric");  // metric = celsius , imperial=farhenite

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getWeatherData(city, units);
      setWeather(data);

      // dynamc bacground
      if (data.temp > 25) setBg(hotBg);
      else setBg(coldBg);
    }
    // console.log(weather);
    fetchWeather();
  }, [city])


  return (
    <div className='app' style={{ backgroundImage: `url(${Bg})` }}>
      {weather && (
        <div className="overlay">
          <Nav setCity={setCity} />

          <section className="section_temperature">
            <h1>{`${weather.name} , ${weather.country}`}</h1>
            <div><img src={weather.iconURL} alt={weather.description} /> <h1>{weather.description}</h1></div>
            <h1> {`${weather.temp} ${units === "metric" ? "°C" : "°F"}`}</h1>
          </section>

          <Description weather={weather} units={units} />
        </div>)}
    </div>
  )
}

export default App