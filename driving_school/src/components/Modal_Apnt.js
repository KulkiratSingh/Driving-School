import React from "react";
import ReactDOM from "react-dom";
import "../CSS Styles/Modal_Apnt.css";

const Modal_Apnt = (props) => {
    return ReactDOM.createPortal(
      <div className="ui basic dimmer modals visible active"
           onClick={props.onDismiss}
      >
        <div className="ui icon header" id="header">
          {props.image}
        </div>

        <div className="content">{props.content}</div>

        <div className="actions">
          {props.actions}
        </div>
      </div>,
      document.querySelector("#modal")
    );
  

}

export default Modal_Apnt;
