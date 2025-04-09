import { Droplet, Sun, Wind } from "lucide-react";
import React from "react";

const UpdateCard = () => {
  return (
    <div className=" md:min-w-32 md:max-w-48 min-w-full p-2 text-center rounded-xl border-[rgba(255,255,255,0.5)] border py-4 my-2">
      <span className="flex justify-center">
        <Sun className="w-12 h-12" />
      </span>
      <p className="text-lg my-2">12°</p>
      <h4 className="text-xl font-medium">Sun</h4>
      <div className="w-[95%] h-px bg-white mx-auto my-3" />
      <div className="flex justify-center gap-4">
        <div className="flex md:block border-white flex-row items-center gap-1">
          <Droplet className="w-5 h-5" />
          <span>2%</span>
        </div>
        <span className="w-px h-6 md:h-12 bg-white" />
        <div className="flex md:block items-center gap-1">
          <Wind className="w-5 h-5" />
          <span>2 km/h</span>
        </div>
      </div>
      <p className="my-2 w-full text-center font-medium">07 am</p>
    </div>
  );
};

export default UpdateCard;
