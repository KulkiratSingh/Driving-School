import React from 'react';
import ReactDOM from 'react-dom';
import history from '../histoy';
import "../CSS Styles/Packages.css";

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div  onClick={props.onDismiss}
            className="ui dimmer modals visible active"  >
      <div 
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}
            <button 
                class="mini grey circular ui icon button" style={{float:'right'}}><i class="close icon"></i>
            </button> 
        </div>
        
        <div class="scrolling content">
        <div className="content">
            {props.content}
        </div>
        </div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
        document.querySelector('#modal')
    )
}

export default Modal;