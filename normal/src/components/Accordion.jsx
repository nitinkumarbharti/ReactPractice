import React, { useState } from "react";

function Accordion({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-3 px-4 flex justify-between items-center"
      >
        <span>{title}</span>
        <span>{open ? "▲" : "▼"}</span>
      </button>
      {open && <div className="px-4 pb-3 text-gray-700">{content}</div>}
    </div>
  );
}

export default Accordion;