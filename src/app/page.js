"use client";
import React, { useEffect, useState } from "react";

export default function Home() {
  const API = "http://localhost:4000/fetch-activity";

  const [activityData, setActivityData] = useState({
    activity: "",
    type: "",
    participants: "",
  });

  const [bgColor, setBgColor] = useState("#FFFFFF");

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setActivityData({
        activity: data.activity,
        type: data.type,
        participants: data.participants,
      });
      changeBgColor();
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };

  const changeBgColor = () => {
    const colors = ["#FFC0CB", "#B0E0E6", "#FFD700", "#ADFF2F", "#FF4500"]; 
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  
  return (
    <div className="">
      <div className="m-auto items-center flex justify-center">
        <section className="text-gray-600 body-font my-5">
          <div className="px-5 py-16 mx-auto bg-slate-400 border border-gray-400 rounded-md">
               <h1 className="m-auto flex justify-center items-center text-2xl text-blue-600">Fetch API Data</h1>
            <div className="p-4 flex justify-center w-full">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg md:w-[450px] w-full">
                <div className="p-6" style={{ backgroundColor: bgColor }}>
                  <h2 className="text-lg title-font font-medium text-gray-900 mb-3"> activity ={activityData.activity} </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3"> type = {activityData.type} </h1>
                  <p className="title-font text-lg font-medium text-gray-900 mb-3">  participants =  {activityData.participants}</p>
                </div>
              </div>
            </div>
            <div className="m-auto flex justify-center items-center">
              <button className="border-2 border-gray-200 bg-blue-600 p-2 text-white rounded-lg"
                onClick={() => fetchApiData(API)} >
                More Here
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
