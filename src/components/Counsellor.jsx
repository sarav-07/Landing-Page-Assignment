import React from "react";
import Counsellorpic from "../assets/counsellor.jpg";
import { AiOutlineGlobal } from "react-icons/ai";
const Counsellor = () => {
  return (
    <div>
      <div className="flex flex-col">
       <div className="flex items-center justify-center">
       <img
          src={Counsellorpic}
          alt=""
          className=" w-[120px] h-[120px] rounded-full"
        />
       </div>
        <h3 className="text-xl font-bold pt-7 pb-1">Amin Nourani</h3>
        <p className="w-[250px] font-medium">
          Counselling Psychologist, Crisis Counsellor, Suicide Prevention
          Gatekeeper 2 Years Experience
        </p>
        <div className="flex justify-between pt-6">
        <div className="items-center gap-4 px-4 py-2 border border-white inline-flex rounded-lg">
          <AiOutlineGlobal className="text-xl" />
          <span>English/Hindi</span>
        </div>
        <button className="text-black font-bold bg-white items-center gap-4 px-4 py-2 border border-white inline-flex rounded-lg">$50/hour</button>
        </div>
        
      </div>
    </div>
  );
};

export default Counsellor;
