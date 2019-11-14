import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = props => {
  const { onClose } = props;

  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    let timer;
    if (!isMounted) {
        timer = setTimeout(onClose, 1500);
    }

    return () => clearTimeout(timer);
}, [isMounted]);

const mountedStyle = { animation: "inAnimation 1500ms ease-in" };
const unmountedStyle = { animation: "outAnimation 1510ms ease-in" };

  return ReactDOM.createPortal(
    <div
      onClick={() => setIsMounted(false)}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
        style={isMounted?  mountedStyle : unmountedStyle}
      >
        <div className="header">Delete Stream</div>
        <div className="content">Are you sure you want to delete stream?</div>
        <div className="actions">
          <button className="ui primary button">Delete</button>
          <button className="ui button">Cancel</button>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
