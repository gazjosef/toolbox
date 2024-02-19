import React from "react";

const Upcoming: React.FC = () => {
  return (
    <div className="h-[100px] w-full | flex flex-col justify-between">
      <div className="daily__header | ">
        <h1>Hourly Forecast</h1>
      </div>
      <div className="daily__hours | flex items-center justify-between"></div>
    </div>
  );
};

export default Upcoming;
