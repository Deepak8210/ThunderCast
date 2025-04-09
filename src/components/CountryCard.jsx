import { Cloud } from "lucide-react";
import React from "react";

const CountryCard = () => {
  return (
    <div className="border border-[rgba(255,255,255,0.3)] rounded-2xl p-2 min-h-[26rem] flex flex-col items-center gap-4 justify-center">
      <div className="w-[5rem] h-[5rem] flex">
        <Cloud className="w-full h-full" />
      </div>
      <h1 className="text-6xl font-semibold">9°</h1>
      <h4 className="text-[1.25rem] font-semibold">(Cloud)</h4>
      <h2 className="text-[2.5rem] font-medium">Greece</h2>
    </div>
  );
};

export default CountryCard;
