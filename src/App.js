import React, { useState } from "react";
import Modal from "./components/Modal";
import ScrollDemo from "./components/ScrollDemo";
import List from "./components/List";

import "./App.css";

function App() {
  const [shouldRender, setShouldRender] = useState(false);

  const handleModalUnmount = () => {
    setShouldRender(!shouldRender);
  };

  return (
    <div>
      {/* <button onClick={handleModalUnmount}>Open Modal Window</button> */}
      {/* {shouldRender && <Modal onClose={handleModalUnmount} />} */}
      <ScrollDemo />
      {/* <List /> */}
    </div>
  );
}

export default App;
