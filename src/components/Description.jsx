import React from "react";
import "./Description.css";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import { BsDropletHalf } from "react-icons/bs";
import { FaWind } from "react-icons/fa";


const Description = ({ weather, units }) => {
  const tempUnits = units === "metric" ? "°C" : "°F";

  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: "min",
      data: weather.temp_min,
      unit: tempUnits,
    },
    {
      id: 3,
      icon: <FaWind />,
      title: "wind speed",
      data: weather.speed,
      unit: "m/s",
    },
    {
      id: 4,
      icon: <BsDropletHalf />,
      title: "humdity",
      data: weather.humidity,
      unit: "%",
    },
    {
      id: 5,
      icon: <FaArrowUp />,
      title: "max",
      data: weather.temp_max,
      unit: tempUnits,
    },
  ];

  return (
    <div className="box-conatainer">
      {cards.map((singleCard) => {
        return (
          <div key={singleCard.id} className="box">
            <p>
              <span>{singleCard.icon}</span>
              {singleCard.title}
            </p>
            <h1>{`${singleCard.data} ${singleCard.unit}`}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Description;
