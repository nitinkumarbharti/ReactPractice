import React, { useState } from "react";

function ToggleSwitch() {
  const [on, setOn] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xl font-bold">Toggle Switch</h2>
      <div
        onClick={() => setOn(!on)}
        className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-all ${
          on ? "bg-green-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${
            on ? "translate-x-8" : ""
          }`}
        ></div>
      </div>
      <p>{on ? "Switch is ON" : "Switch is OFF"}</p>
    </div>
  );
}

export default ToggleSwitch;