import React from "react";
import { useMyContext } from "./context";

export default function Controler() {
  const {
    on,
    setOn,
    size,
    setSize,
    intensity,
    setIntensity,
    primaryColor,
    setPrimaryColor,
    secondaryColor,
    setSecondaryColor,
    borderWidth,
    setBorderWidth
  } = useMyContext();
  return (
    <div className="w-full lg:w-4/12">
      <button
        className="px-5 mb-5 border h-10 rounded"
        onClick={() => setOn(!on)}
      >
        {on ? "Remove Blurify" : "Apply Blurify"}
      </button>
      <div className="">
        <label htmlFor="size">
          Preloader Size <b>{size}</b>
        </label>
        <input
          className="w-full"
          type="range"
          id="size"
          min={1}
          max={100}
          value={size}
          onChange={e => setSize(e.target.value)}
        />
      </div>
      <div className="mt-3">
        <label htmlFor="intensity">
          Blur Intensity <b>{intensity}</b>
        </label>
        <input
          className="w-full"
          type="range"
          id="intensity"
          min={1}
          max={100}
          value={intensity}
          onChange={e => setIntensity(e.target.value)}
        />
      </div>
      <div className="mt-3">
        <label htmlFor="borderWidth">
          Preloader Border Width <b>{borderWidth}</b>
        </label>
        <input
          className="w-full"
          type="range"
          id="borderWidth"
          min={1}
          max={100}
          value={borderWidth}
          onChange={e => setBorderWidth(e.target.value)}
        />
      </div>

      <div className="mt-3">
        <label htmlFor="primaryColor">Primary Color</label>
        <input
          className="w-full border h-10 rounded mt-2"
          type="color"
          id="primaryColor"
          value={primaryColor}
          onChange={e => setPrimaryColor(e.target.value)}
        />
      </div>

      <div className="mt-3">
        <label htmlFor="secondaryColor">Secondary Color</label>
        <input
          className="w-full border h-10 rounded mt-2"
          type="color"
          id="secondaryColor"
          value={secondaryColor}
          onChange={e => setSecondaryColor(e.target.value)}
        />
      </div>
    </div>
  );
}
