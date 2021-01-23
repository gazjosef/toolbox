import React from 'react';

export const WeatherIcon = (props) => {
  if (props.icon !== undefined) {
    return (
      <div id="weather-icon">
        <img
          src={require(
            `../../../assets/icons/${props.icon}.svg`
          ).default}
          alt={props.description}
          className="filter-white"
        />
      </div>
    );
  } else {
    return <div id="weather-icon" />;
  }
};
