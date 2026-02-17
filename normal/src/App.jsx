import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Counter from "./counter.jsx";
import Counter1 from "./counter1.jsx";
import ColorPicker from "./components/ColorPicker.jsx";
import ToggleSwitch from "./components/ToggleSwitch.jsx";
import Accordion from "./components/Accordion.jsx";


function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <Navbar />
    
      <Counter />
      <Counter1 />
      <ColorPicker/>
      <ToggleSwitch/>
      <Counter />
      <Accordion/>
      <Footer/>
    </div>
  );
}

export default App;