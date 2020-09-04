import React from "react";
import { Link } from "react-router-dom";
import { activeMenu } from "../actions";
import { connect } from "react-redux";
import "../CSS Styles/Home.css";
import DL from "../DL.jpg";
import logo_1 from "../CSS Styles/logo_1.jpg";
import logo_2 from "../CSS Styles/logo_2.jpg";
import logo_3 from "../CSS Styles/logo_3.jpg";
import Ad from "./Ad";

class Home extends React.Component {
  onButtonClick = (path) => {
    this.props.activeMenu(path);
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <img src={DL} alt="website logo" />
          <h1>The Binary Driving School- Your Key To Safe Driving </h1>
        </div>
        <br></br>

        <div className="main_page">

        <div className="ui grid container">
          <h4 className="your_driver_license_text">
            Your Driver’s License <br /> Is Just A Click Away!
          </h4>
          <br />
          </div>
         
          <div className="ui grid container">
          <Link to="/book-apnt">
            <button
              className="large ui right labeled icon blue button"
              id="more_info_button"
              onClick={() => this.onButtonClick("appointment")}
            >
              <i className="right arrow icon"></i>
              More Information
            </button>
            <br />
          </Link>
          </div>


          <div className="ui grid container">
            <Link to="/cs" className="item" onClick={() => this.onButtonClick("contact")}>
              <img src={logo_1} alt="first free driving lesson" id="logo1" />
              <span className="text_1">
                First Lesson <br /> on us!{" "}
              </span>
            </Link>
          </div>

          <div className="ui grid container">
            <Link to="/as" className="item" onClick={() => this.onButtonClick("about")}>
              <img src={logo_2} alt="fully qualified team" id="logo2" />
              <span className="text_2">
                A Fully <br /> Qualified Team{" "}
              </span>
            </Link>
          </div>

          <div className="ui grid container">
          <Link to="/pkgs" className="item" onClick={() => this.onButtonClick("packages")}>
            <img src={logo_3} alt="pre-test lessons" id="logo3" />
            <span className="text_3">
              Discover
              <br /> Our Packages{" "}
            </span>
          </Link>
          </div>
        </div>

        <div className="ui inverted segment" id="double_vertical_table">
          <div className="ui two column very relaxed grid">
            <div className="column">
              <h2>
                {" "}
                <i className="users icon"></i> Who are we?
              </h2>
              <p>
                Welcome to New Brunswicks leader in drivers education and
                training for over 25 years. Our driving schools are located in
                Fredericton, Moncton, Rothesay and Saint John. With our
                qualified drivers, we will make sure you are successful in
                getting your License on your first try.
              </p>
            </div>

            <div className="column" style={{ marginLeft: "-20px" }}>
              <h2>
                <i className="question circle outline icon"></i> What do we
                offer?
              </h2>
              <p>
                Binary Driving School is the leader in driver education. Our
                driving school provides the most up-to-date and comprehensive
                driver training programs available.
                <br /> Book an appointment today with us.
                <Link to="/book-apnt">
                  <button
                    className="mini ui right labeled icon grey button"
                    id="book_now_button"
                    onClick={() => this.onButtonClick("appointment")}
                  >
                    <i className="right arrow icon"></i>
                    Book Now
                  </button>
                </Link>
              </p>
            </div>
          </div>

          <div className="ui vertical divider" style={{ marginLeft: "-15px" }}>
            <i className="grey car icon"></i>
          </div>
        </div>
        

        <div class="ui grid container" id="testing_grid">
            <div className="ui placeholder segment sid">
              <h1 id="placeholder_text">
                {" "}
                <i className="bity icon"></i> 21+ Trainers
              </h1>
              <h1 id="placeholder_text2">
                {" "}
                <i className="users icon"></i> 100+ Students
              </h1>
              <h1 id="placeholder_text3">
                <i className="car icon"></i> 20+ Hybrid Cars
              </h1>
            </div>
        </div>

       
          <h1 id="placeholder_text4">
            JOIN TODAY AND GET 60% OFF <br /> ON YOUR FIRST 2 LESSONS{" "}
          </h1>
          

        <Ad />

      </React.Fragment>
    );
  }
}

export default connect(null, { activeMenu })(Home);
