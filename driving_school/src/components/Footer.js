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
                  <Link to="/" className="item" onClick={() => this.props.activeMenu("home")} style={{color: 'lightblue'}}>
                    <li>Home</li>
                  </Link>
                  <Link to="/pkgs" className="item" onClick={() => this.props.activeMenu("packages")} style={{color: 'lightblue'}} >
                    <li>Packages</li>
                  </Link>
                  <Link to="/book-apnt" className="item" onClick={() => this.props.activeMenu("appointment")} style={{color: 'lightblue'}}>
                    <li>Appointment</li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="four wide column">
              {/* Column 2  */}
              <div className="col">
                <h4>Resources and Links</h4>
                <ul className="list-unstyled">
                  <Link to="/as" className="item" onClick={() => this.props.activeMenu("about")} style={{color: 'lightblue'}}>
                    <li>About Us</li>
                  </Link>
                  <Link to="/cs" className="item" onClick={() => this.props.activeMenu("contact")} style={{color: 'lightblue'}}>
                    <li>Contact Us</li>
                  </Link>
                  <Link to="/ancmt" className="item" onClick={() => this.props.activeMenu("announcement")} style={{color: 'lightblue'}}>
                    <li>Announcements</li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="four wide column">
              {/* Column 3  */}
              <div className="col">
                <h4>Services we offer:</h4>
                <ul className="list-unstyled">
                  <li>Flexible Schedule</li>
                  <li>Rental Cars</li>
                  <li>60% off on first 2 lessons</li>
                </ul>
              </div>
            </div>

            <div className="four wide column" style={{ marginLeft: "-50px" }}>
              <div className="social-media-icons">
                <h4> Follow Us :
                  <a href="https://www.facebook.com/react">
                    <i className="large blue facebook icon" style={{ marginLeft: "5px" }}></i>
                  </a>

                  <a href="https://twitter.com/reactjs">
                    <i className="large teal twitter icon"></i>
                  </a>

                  <a href="https://www.instagram.com/reactjsofficial/">
                    <i className="large red instagram icon"></i>
                  </a>

                  <a href="https://en.wikipedia.org/wiki/React_(web_framework)">
                    <i className="large grey wikipedia w icon"></i>
                  </a>

                </h4>
              </div>
            </div>
          </div>
          <hr />
          <div className="copyright">
            <p>
              &copy;{new Date().getFullYear()} Developed By : Kulkirat Singh | All
              rights reserved | Privacy | Developed using React, Redux, react-router, redux-form, html & css. 
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { activeMenu })(Footer);
