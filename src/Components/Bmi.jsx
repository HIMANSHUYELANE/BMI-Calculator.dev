import React, { useState } from "react";
import { FaLessThan } from "react-icons/fa";

export default function Bmi() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [data, setData] = useState({
    height: "",
    weight: "",
  });

  const handleData = (e) => {
    const { name, value } = e.target;
    if (name === "height") {
      setHeight(value);
    } else if (name === "weight") {
      setWeight(value);
    }
  };
  const [eror, setEror] = useState({});
  function hnadleEvent(e) {
    e.preventDefault();
    setData({
      height,
      weight,
    });
    error(height, weight);
  }
  function error(height, weight) {
    const err = {};
    if (!height) {
      err.height = "Please Enter the Height";
    }
    if (!weight) {
      err.weight = "please Enter the Weight";
    }
    setEror(err);
    return err;
  }
  console.log(data)
  let cal = data.weight / Math.pow(data.height, 2);
  return (
    <>
      <div className="bg-[#67ade5]">
        <div className="text-center text-3xl font-bold py-5 ">
          Body Mass Index (BMI) Calculator
        </div>
        <div className="md:w-[60%] space-y-5 w-[80%] py-1 mx-auto">
          <div className="flex flex-col w-[90%] md:w-[60%] mx-auto">
            <label>Height</label>
            <input
              placeholder="In Meter"
              className="my-1 px-2 border-2"
              type="number"
              value={height}
              onChange={handleData}
              name="height"
              id=""
            />
            <span className="font-normal text-sm text-red-800">
              {eror.height}
            </span>
            <label>weight</label>
            <input
              placeholder="In Kilograms"
              className="my-1 px-2 border-2"
              type="number"
              value={weight}
              onChange={handleData}
              name="weight"
              id=""
            />
            <span className="font-normal text-sm text-red-800">
              {eror.weight}
            </span>
            <button className="border-2 my-5" onClick={hnadleEvent}>
              Calculate
            </button>
          </div>
          <div className="md:flex items-center justify-evenly ">
            <div className="w-[200px] mx-auto md:mx-0">
              <h1 className="text-center font-mono font-bold">Result</h1>
              <p>Height:-{data.height}</p>
              <p>Weight:-{data.weight}</p>
              <p>BMI:-{cal}</p>
            </div>
            <div className="my-4 w-[210px] mx-auto md:mx-0">
              <h1 className="text-center font-mono font-bold">
                BMI Categories
              </h1>
              <p className="flex items-center ">
                Underweight = BMI{" "}
                <span className="">
                  <FaLessThan />
                </span>
                18.5
              </p>
              <p className="flex  ">Normal = BMI 18.5 to 24.9</p>
              <p className="flex  ">Overweight = BMI 25 to 29.9</p>
              <p className="flex  ">Obesity = BMI 30 or greater</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
