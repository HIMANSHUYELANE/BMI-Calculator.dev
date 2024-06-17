import React, { useState } from "react";

export default function Converter() {
  const [feet, setFeet] = useState("");
  const [inch, setInch] = useState("");
  const [data, setData] = useState({
    feet: "",
    inch: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "feet") {
      setFeet(value);
    } else if (name === "inch") {
      setInch(value);
    }
  };

  const handleSubmit = () => {
    setData({
      feet,
      inch,
    });
  };
  let f=feet*0.3048;
  let i=inch*0.0254;
  let r=f+i
  return (
      <div className="flex flex-col justify-center py-8 bg-[#67ade5] ">
        <h1 className="text-center">Feet To Meter Converter </h1>
      <div className="w-[200px] mx-auto">
        <div className="flex flex-col space-y-2">
          <input
            type="number"
            name="feet"
            id=""
            placeholder="feet"
            value={feet}
            onChange={handleChange}
          />
          <input
            type="number"
            name="inch"
            id=""
            placeholder="feet"
            value={inch}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Calculate</button>
        </div>
        <div>
          <p>Feet {data.feet}</p>
          <p>Inch {data.inch}</p>
          <p>In Meter {r}</p>
        </div>
      </div>
    </div>
  );
}
