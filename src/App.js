import React, { useState } from "react";
import NavBar from "./component/NavBar/NavBar";
import { scaleRotate as Menu } from "react-burger-menu";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <NavBar />
      <button onClick={handleOpen}>haha</button>
      <Menu burgerButtonClassName={"burgerIcon"} isOpen={true}>
        <div>sdad</div>
      </Menu>
    </div>
  );
}

export default App;
