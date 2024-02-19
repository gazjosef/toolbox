import React from "react";

const Upcoming: React.FC = () => {
  return (
    <div className="h-[100px] w-full | flex flex-col justify-between">
      <h1 className="text-sm text-left">Hourly Forecast</h1>
      <div className="daily__hours | flex items-center justify-between"></div>
    </div>
  );
};

export default Upcoming;
