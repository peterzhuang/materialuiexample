import React, { useState } from "react";
import Modal from "./components/Modal";
import "./App.css";

function App() {

  const [shouldRender, setShouldRender] = useState(false);

  const handleModalUnmount = () => {
    setShouldRender(!shouldRender);
};

  return (
    <div>
      <button onClick={handleModalUnmount}>Open Modal Window</button>
      {shouldRender && <Modal onClose={handleModalUnmount} />}
    </div>
  );
}

export default App;
