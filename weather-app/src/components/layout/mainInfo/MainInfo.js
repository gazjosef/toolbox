import React from 'react';

export const MainInfo = (props) => (
  <div id="main-info">
    <div className="text-left px-3">
      {props.temperature && (
        <p className="main-key">
          Temperature:{' '}
          <span className="main-value">
            {props.temperature}
            <sup>&deg;</sup>
            <span className="unit">C</span>
          </span>
        </p>
      )}
      {props.description && (
        <p className="main-key">
          Conditions: <span className="main-value">{props.description}</span>
        </p>
      )}
    </div>
  </div>
);
