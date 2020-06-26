import React from "react";
import Controler from "./controler";
import Blurify from "react-blurify";
import MyProvider, { useMyContext } from "./context";

function Card() {
  const {
    on,
    size,
    intensity,
    primaryColor,
    secondaryColor,
    borderWidth
  } = useMyContext();
  return (
    <div className="bg-white rounded-lg shadow-lg p-5 w-full mt-12 lg:mt-0 lg:w-6/12">
      <Blurify
        on={on}
        intensity={intensity}
        preloaderPrimaryColor={primaryColor}
        preloaderSecondaryColor={secondaryColor}
        preloaderBorderWidth={borderWidth}
        preloaderSize={size}
      >
        <h2 className="text-2xl font-bold mb-2">Hello there!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem debitis
          consectetur porro eligendi id a, temporibus ducimus soluta nemo beatae
          ut nihil eveniet minima voluptatibus accusamus unde laboriosam facere
          excepturi!
        </p>
        <div className="flex items-center mt-5">
          <button className="bg-indigo-700 rounded h-10 px-5 text-indigo-100">
            Option 1
          </button>
          <button className="ml-4 border border-indigo-700 rounded h-10 px-5 text-indigo-700">
            Option 2
          </button>
        </div>
        <div className="flex space-x-6 mt-5">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">Hello there!</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
              debitis consectetur porro eligendi id a, temporibus ducimus soluta
              nemo beatae ut nihil eveniet minima voluptatibus accusamus unde
              laboriosam facere excepturi!
            </p>
            <button className="mt-5 border border-indigo-700 rounded h-10 px-5 text-indigo-700">
              Option
            </button>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">Hello there!</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
              debitis consectetur porro eligendi id a, temporibus ducimus soluta
              nemo beatae ut nihil eveniet minima voluptatibus accusamus unde
              laboriosam facere excepturi!
            </p>
            <button className="mt-5 border border-indigo-700 rounded h-10 px-5 text-indigo-700">
              Option 2
            </button>
          </div>
        </div>
      </Blurify>
    </div>
  );
}

export default function App() {
  return (
    <div className="container mx-auto">
      <div className="text-center">
        <h1 className="text-2xl">React Blurify</h1>
        <h2>Apply blur effect to children components</h2>
      </div>
      <MyProvider>
        <div className="flex mt-12 flex-col lg:flex-row items-start justify-between">
          <Controler />
          <Card />
        </div>
      </MyProvider>
    </div>
  );
}
