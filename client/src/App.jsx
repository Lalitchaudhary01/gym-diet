import { useEffect, useRef } from "react";

import Navbar from "./components/Nabar";
import Home from "./components/Home";

function App() {
  const boxRef = useRef(null);

  return (
    <div className="">
      <Home />
    </div>
  );
}

export default App;
