"use client";
import { useEffect, useState } from "react";
import SideBar from "./Sidebar";
import Link from 'next/link';
import CurrencyLocation from "../Service/countryCurrency";

export default function Header() {
  const [positionSideBar, setPositionSideBar] = useState(-250);

  function showSideBar() {
    if (positionSideBar === -250) {
      setPositionSideBar(0);
    }
  }

  function hideSideBar() {
    if (positionSideBar === 0) {
      setPositionSideBar(-250);
    }
  }

  useEffect(() => {
    async function getConfigs(){
      const geo_ = new CurrencyLocation();
      const response = await geo_.getCountryFromIp();
      sessionStorage.setItem("dev-region", response);
    }
    getConfigs();
  },[]);

  return (
    <>
      <div className="w-full h-[90px] pl-16 pr-16 lg:pl-6 lg:pr-6 flex justify-between">
        <div className="w-full h-full flex items-center ">
          <a className="w-[156px] h-[28px] bg-[url('/devsensor_logo.png')] bg-[length:100%_100%]">
            
          </a>
        </div>
        <div className="w-full h-full flex items-center  justify-end space-x-8 ">
          {/* 
          <a className="text-white hover:underline font-roboto font-semibold lg:hidden text-sm">
            Order Now
          </a> 
          */}
          <div
            onClick={showSideBar}
            className="w-6 h-6 bg-[url('/menu.svg')] bg-[length:100%_100%] cursor-pointer"
          ></div>
        </div>
      </div>
      <SideBar position={positionSideBar} hideSideBar={hideSideBar} />
    </>
  );
}
