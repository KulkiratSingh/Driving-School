import React from "react";
import ReactDOM from "react-dom";
import "../CSS Styles/Packages.css";
import "../CSS Styles/Modal.css";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui modals visible active" id="modal_pos">
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">
          {props.title}
          {props.closeButton}
          {props.closeButton2}
        </div>

        <div className="content">
          <div className="content">{props.content}</div>
        </div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
