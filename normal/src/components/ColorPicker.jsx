import React, { useState } from "react";

function ColorPicker() {
  // State to hold the selected color
  const [color, setColor] = useState("blue");

  // Some color options
  const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Pick a Color!</h1>

      <div className="flex justify-center gap-3 mb-4">
        {colors.map((c) => (
          <button
            key={c}
            onClick={() => setColor(c)}
            className={`w-10 h-10 rounded-full border-2 border-gray-300 hover:border-black transition-all`}
            style={{ backgroundColor: c }}
          ></button>
        ))}
      </div>

      <div
        className="mx-auto w-40 h-40 rounded-lg flex items-center justify-center text-white text-xl font-bold"
        style={{ backgroundColor: color }}
      >
        {color}
      </div>

      <p className="mt-4 text-gray-700 dark:text-gray-300">
        You selected: <strong>{color}</strong>
      </p>
    </div>
  );
}

export default ColorPicker;