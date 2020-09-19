import React from 'react'; 
import '../CSS Styles/Announcement.css';

const Loader = (props) => {
    return (
        <div class="ui active inverted dimmer" id="test123">
        <div class="ui text loader"> {props.message}</div>
        </div>
    )
}

Loader.defaultProps = {
    message: "Loading..."
}

export default Loader;