import React from 'react'

export const CityDate = (props) => (
    <div id="cityAndDate" className="cityAndDate text-center">
      <div className="city">
        {props.city && props.country && (
          <p>
            {props.city}, {props.country}
          </p>
        )}
      </div>
      <div className="date">
        {props.time && <p>{props.time}</p>}
      </div>
    </div>
  );