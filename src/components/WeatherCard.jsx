import React from "react";

const WeatherCard = () => {
  return (
    <div className="w-full my-6 md:pb-24 rounded-3xl border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] p-6 md:p-10 backdrop-blur-md shadow-[0_4px_15px_rgba(255,255,255,0.2)]">
      {/* Header Section */}
      <div className="flex items-center justify-between gap-4">
        <h4 className="text-white font-semibold text-xl md:text-2xl flex-1">
          London
        </h4>
        <div className="h-16 md:h-24 w-16 md:w-24 flex-shrink-0">
          <img
            src="/sun.png"
            alt="Weather condition"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Date */}
      <p className="text-white text-center text-lg md:text-xl font-medium mt-2">
        Today, 03 April
      </p>

      {/* Temperature */}
      <h2 className="text-white text-4xl md:text-5xl text-center font-semibold my-4">
        24°
      </h2>

      {/* Weather Condition */}
      <p className="text-white text-xl md:text-2xl text-center font-medium mb-6">
        Sunny
      </p>

      {/* Weather Details */}
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        <div className="flex flex-col items-center">
          <span className="text-white text-lg md:text-xl font-medium">
            17 km/h
          </span>
          <span className="text-white text-base md:text-lg opacity-80">
            Wind
          </span>
        </div>
        <div className="flex flex-col items-center border-l border-[rgba(255,255,255,0.3)]">
          <span className="text-white text-lg md:text-xl font-medium">22%</span>
          <span className="text-white text-base md:text-lg opacity-80">
            Humidity
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
