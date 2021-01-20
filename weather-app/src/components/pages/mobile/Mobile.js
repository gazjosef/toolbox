import React from 'react';

import { WeatherApp } from "../../weatherApp/WeatherApp"

export const Mobile = () => {
    return (
      <>
        <div className="center">
          {/* iPhone / iPad */}
          <div className="mobile">
            <WeatherApp />
            {/* Home Button */}
            <div className="home"></div>
            <div className="inner"></div>
            {/* Volume */}
            <ul className="volume">
              <li></li>
              <li></li>
            </ul>
            <ul className="silent">
              <li></li>
            </ul>
            <ul className="sleep">
              <li></li>
            </ul>
          </div>
        </div>
      </>
    );
  };