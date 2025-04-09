// import { Droplets } from "lucide-react";
// import React from "react";

// const MonoCard = () => {
//   return (
//     <div className="w-full my-6 md:pb-24 rounded-2xl border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] p-6 md:p-10 backdrop-blur-md shadow-[0_4px_15px_rgba(255,255,255,0.2)]">
//       <span className="flex w-full  h-[4rem] my-2">
//         <Droplets className="w-full h-full flash-yellow" />
//       </span>
//       <p className="flex text-[1.7rem] space-x-2 w-full justify-center font-medium">
//         <span>Wind</span>
//         <span>17 km/h</span>
//       </p>
//     </div>
//   );
// };

// export default MonoCard;

import { Droplets } from "lucide-react";
import React from "react";

const MonoCard = () => {
  return (
    <div className="w-full h-full rounded-2xl border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] p-6 md:p-[2.1rem] backdrop-blur-md shadow-[0_4px_15px_rgba(255,255,255,0.2)] flex flex-col justify-center items-center">
      <span className="flex w-[4rem] h-[3.5rem] mb-4">
        <Droplets className="w-full h-full flash-yellow" />
      </span>
      <div className="text-center">
        <p className="text-[1.7rem] font-medium">Wind</p>
        <p className="text-[1.7rem] font-medium">17 km/h</p>
      </div>
    </div>
  );
};

export default MonoCard;
