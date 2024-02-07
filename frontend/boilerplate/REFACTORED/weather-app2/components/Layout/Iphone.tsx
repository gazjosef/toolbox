import WeatherApp from "../Sections/WeatherApp.tsx";
import React from "react";

interface iPhoneProps {}

const Iphone: React.FC<iPhoneProps> = () => {
  return (
    <div className="center">
      <div className="mobile | bg-white h-[580px] w-[276px] border-solid border-2 border-neutral-400 box-border rounded-[30px] shadow-[inset_0_0_8px_rgba(0,0,0,0.3)] | relative">
        <div className="screen | bg-white h-[455px] w-[256px] border-solid border-[1px] border-neutral-400 mt-16 mx-auto | relative">
          {/* WEATHER APP */}
          <WeatherApp />
        </div>
        <div
          className="inner | bg-black h-[4px] w-[40px] box-border rounded-sm | absolute top-[32px] left-2/4 -translate-x-2/4 |
        before:content-[''] before:bg-black before:h-[8px] before:w-[8px] before:rounded-[50%] | before:absolute before:top-[-2px] before:left-[-22px] | 
        after:content-[''] after:bg-black after:h-[6px] after:w-[6px] after:rounded-[50%] | after:absolute after:top-[-16px] after:left-2/4"
        ></div>
        <ul className="volume |  absolute top-[90px] left-[-4px]">
          <li className="bg-neutral-50 h-[30px] w-[2px] mt-[10px] mx-0 rounded-tl-[4px] rounded-bl-[4px]"></li>
          <li className="bg-neutral-50 h-[30px] w-[2px] mt-[10px] mx-0 rounded-tl-[4px] rounded-bl-[4px]"></li>
        </ul>
        <ul className="silent | absolute top-[50px] left-[-4px]">
          <li className="bg-neutral-50 h-[20px] w-[2px] mt-[10px] mx-0 rounded-tl-[4px] rounded-bl-[4px]"></li>
        </ul>
        <ul className="sleep | absolute top-[90px] right-[-4px]">
          <li className="bg-neutral-50 h-[30px] w-[2px] mt-[10px] mx-0 rounded-tl-[4px] rounded-bl-[4px]"></li>
        </ul>
        <div className="home | bg-white h-[40px] w-[40px] border-[2px] border-solid border-neutral-300 box-border rounded-[50%] shadow-[inset_0_0_7px_rgba(0,0,0,0.1)] | absolute bottom-[15px] left-2/4	-translate-x-2/4"></div>
      </div>
    </div>
  );
};

export default Iphone;
