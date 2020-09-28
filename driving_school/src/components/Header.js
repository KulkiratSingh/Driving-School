import React from "react";
import { Link } from "react-router-dom";
import "../CSS Styles/Header.css";
import { activeMenu } from "../actions";
import { connect } from "react-redux";

class Header extends React.Component {
  onInputClick = (path) => {
    this.props.activeMenu(path);
  };

  render() {
    const activeStatus = window.location.pathname;
    return (
      <>
        <div className="ui top fixed inverted menu">
          <Link
            to="/"
            className={`${activeStatus === "/" ? "active" : ""} item`}
            onClick={() => this.onInputClick("home")}
          >
            <i className="home icon"></i>
            Home
          </Link>

          <Link
            to="/book-apnt"
            className={`${activeStatus === "/book-apnt" ? "active" : ""} item`}
            onClick={() => this.onInputClick("appointment")}
          >
            <i className="clipboard check icon"></i>
            Book An Appointment
          </Link>

          <Link
            to="/pkgs"
            className={`${activeStatus === "/pkgs" ? "active" : ""} item`}
            onClick={() => this.onInputClick("packages")}
          >
            <i className="boxes icon"></i>
            Packages
          </Link>

          <Link
            to="/ancmt"
            className={`${activeStatus === "/ancmt" ? "active" : ""} item`}
            onClick={() => this.onInputClick("announcement")}
          >
            <i className="bullhorn icon"></i>
            Announcement
          </Link>

          <Link
            to="/as"
            className={`${activeStatus === "/as" ? "active" : ""} item`}
            onClick={() => this.onInputClick("about")}
          >
            <i className="users icon"></i>
            About Us
          </Link>

          <div className="right menu">
            <Link
              to="/cs"
              className={`${activeStatus === "/cs" ? "active" : ""} item`}
              onClick={() => this.onInputClick("contact")}
            >
              <i className="phone icon"></i>
              Contact Us
            </Link>
          </div>
        
        </div>
        <br></br>
        <br></br>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { item: state.header };
};

export default connect(mapStateToProps, { activeMenu })(Header);
