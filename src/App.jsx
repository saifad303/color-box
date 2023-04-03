
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import BoxOne from "./components/BoxOne";
import BoxTwo from "./components/BoxTwo/BoxTwo";

import BoxThree from "./components/BoxThree";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BoxOne />
      <BoxTwo></BoxTwo>
      <BoxThree />
    </div>
  );
}

export default App;
