import React from "react";
import { Link } from "react-router-dom";
import {activeMenu} from '../actions';
import { connect } from "react-redux";
import "../CSS Styles/Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="main-footer">
        <div className=" ui container">
          <div className="ui grid">
            <div className="four wide column" style={{ marginLeft: "50px" }}>
              {/* Column 1  */}
              <div className="col">
                <h4>The Binary Driving School</h4>
                <ul className="list-unstyled">
                  <Link to="/" className="item" onClick={() => this.props.activeMenu("home")}>
                    <li>Home</li>
                  </Link>
                  <li>Under Development</li>
                  <li>Under Development</li>
                </ul>
              </div>
            </div>

            <div className="four wide column">
              {/* Column 2  */}
              <div className="col">
                <h4>The Binary Driving School</h4>
                <ul className="list-unstyled">
                  <Link to="/" className="item" onClick={() => this.props.activeMenu("home")}>
                    <li>Home</li>
                  </Link>
                  <li>Under Development</li>
                  <li>Under Development</li>
                </ul>
              </div>
            </div>

            <div className="four wide column">
              {/* Column 3  */}
              <div className="col">
                <h4>The Binary Driving School</h4>
                <ul className="list-unstyled">
                  <Link to="/" className="item" onClick={() => this.props.activeMenu("home")} >
                    <li >Home</li>
                  </Link>
                  <li>Under Development</li>
                  <li>Under Development</li>
                </ul>
              </div>
            </div>

            <div className="four wide column" style={{ marginLeft: "-50px" }}>
              <div className="social-media-icons">
                <h4>
                  Follow Us :
                  <i
                    className="large blue facebook icon"
                    style={{ marginLeft: "5px" }}
                  ></i>
                  <i className="large teal twitter icon"></i>
                  <i className="large red instagram icon"></i>
                  <i className="large grey wikipedia w icon"></i>
                </h4>
              </div>
            </div>
          </div>
          <hr />
          <div className="copyright">
            <p>
              &copy;{new Date().getFullYear()} Created by : Kulkirat Singh | All
              rights reserved | Terms Of Service | Privacy |
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { activeMenu })(Footer);
