import React from "react";
import Comments from "./Comments";
import { connect } from "react-redux";
import { activeModal, activeMenu, leftButton } from "../actions";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import history from "../histoy";
import "../CSS Styles/Modal.css";
import faker from "faker";

class Package2 extends React.Component {
  onLeftButtonClick = (path) => {
    this.props.leftButton(path);
  };
  onRightButtonClick = (path) => {
    this.props.activeModal(path);
  };

  onDismiss = () => {
    this.props.activeModal("false");
    history.push("/pkgs");
  };

  onDismissForLeftButton = () => {
    this.props.leftButton("false");
    history.push("/pkgs");
  };

  onCancelClick = (path) => {
    this.props.activeModal(path);
    this.props.leftButton(path);
  };

  onBookNowClick = (path) => {
    this.props.activeModal(path);
    this.props.leftButton(path);
    this.props.activeMenu("appointment");
  };

  renderList() {
    const activeModalStatus = this.props.modal;
    const activeModalStatus_for_left_button = this.props.left;
    const closeButton = (
      <Link
        to="/pkgs/p2"
        onClick={() => this.props.activeModal("false")}
        className="mini grey circular ui icon button"
        style={{ float: "right" }}
      >
        <i class="close icon"></i>
      </Link>
    );

    const closeButton2 = (
      <Link
        to="/pkgs/p2"
        onClick={() => this.props.leftButton("false")}
        className="mini grey circular ui icon button"
        style={{ float: "right" }}
      >
        <i class="close icon"></i>
      </Link>
    );

    const buttons = (
      <React.Fragment>
        <Link
          to="/book-apnt"
          onClick={() => this.onBookNowClick("false")}
          className="ui positive right labeled icon button"
          id="book_now_modal_button"
        >
          <i className="right arrow icon"></i>
          Book Now !
        </Link>

        <Link
          to="/pkgs/p2"
          onClick={() => this.onCancelClick("false")}
          className="ui black button"
        >
          Cancel
        </Link>
      </React.Fragment>
    );

    const content = (
      <div>
        <h3 id="goal">Goal: {faker.lorem.paragraphs()}</h3>
        <h3 id="in-class-lsns"> In-Class Lessons: {faker.lorem.paragraph()}</h3>
        <h3 id="requr">Requirements: {faker.lorem.lines()}</h3>
        <h3 id="ins-sav">Insurance Savings: {faker.lorem.lines()}</h3>
        <p id="fake-data-in-modal">
          *** Please note that the text generated above{" "}
          <small id="small">(excluding the table)</small> is coming from
          <a href="https://github.com/marak/Faker.js/"> faker.js</a>. The text
          above is not true, it is used just as a reference ***
        </p>
        <table class="ui very basic collapsing celled table" id="table2">
          <tbody>
            <tr>
              <td>
                <h4 class="ui image header">
                  <i className="clipboard outline icon"></i>
                  <div class="content">
                    In-Class
                    <div class="sub header">Training</div>
                  </div>
                </h4>
              </td>
              <td>30 hrs.</td>
            </tr>
            <tr>
              <td>
                <h4 class="ui image header">
                  <i className={" car icon"}></i>
                  <div class="content">
                    In–Car
                    <div class="sub header">Training</div>
                  </div>
                </h4>
              </td>
              <td>25 hrs.</td>
            </tr>
            <tr>
              <td>
                <h4 class="ui image header">
                  <i className={" file alternate outline icon"}></i>
                  <div class="content">
                    eLearing
                    <div class="sub header">Entertainment</div>
                  </div>
                </h4>
              </td>
              <td>10 hrs.</td>
            </tr>
            <tr>
              <td>
                <h4 class="ui image header">
                  <i className={" shield alternate icon"}></i>
                  <div class="content">
                    Defensive <br /> Driving <br /> Maneuvers
                    <div class="sub header">Executive</div>
                  </div>
                </h4>
              </td>
              <td>9 hrs.</td>
            </tr>

            <tr>
              <td>
                <h4 class="ui image header">
                  <i className={" suitcase icon"}></i>
                  <div class="content">
                    Road Test <br /> Package
                    <div class="sub header">Executive</div>
                  </div>
                </h4>
              </td>
              <td>11 hrs.</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
    return (
      <>
        <div
          className="ui two column grid"
          style={{ marginLeft: "0px", marginTop: "30px" }}
        >
          <div className="column">
            <div className="ui raised segment">
              <p className="ui red ribbon label">Overview</p>
              <h3>
                Welcome to our package 2. Package 2 is for motorcycle license.
                With our Package 2 you will get the best training with our
                interactive lessons and amazing trainers. Package 2 at BDS
                offers lessons for the young drivers of canada with a new
                approach to collision-free driving.
              </h3>

              <p className="ui blue ribbon label" style={{ marginTop: "19px" }}>
                Package Content
              </p>
              <h3>
                The binary driving school's package 2 offers courses for new
                drivers of all ages for Class 6 (All Motorcycles) license, which
                includes:
                <ul className="list-unstyled">
                  <li style={{ marginBottom: "5px" }}>
                    30 hrs theory done in a classroom setting - Applicant must
                    be at least 16 years of age{" "}
                  </li>
                  <li style={{ marginBottom: "5px" }}>
                    25 hours e-learning done online
                  </li>
                  <li style={{ marginBottom: "5px" }}>
                    The Binary Driving School student workbook
                  </li>
                  <li style={{ marginBottom: "5px" }}>
                    Private in-vehicle lessons - Must wear adequate protective
                    headgear.
                  </li>
                  <li style={{ marginBottom: "5px" }}>
                    Free online Co-Driver Program for parents and other driving
                    coaches
                  </li>
                  <li style={{ marginBottom: "5px" }}>
                    Free CogniFit New Driver cognitive training for students
                  </li>
                </ul>
              </h3>
            </div>
          </div>

          <div className="column">
            <div className="ui segment">
              <p className="ui orange right ribbon label">Documents Required</p>
              <h3>
                Our program is a Ministry of Transportation Approved Beginner
                Driver Education Course which requires mandatory documents which
                are:
                <ul className="list-unstyled">
                  <li>
                    At least one document from the{" "}
                    <a href="https://www2.gnb.ca/content/dam/gnb/Departments/ps-sp/pdf/Services/List1-Acceptable-Identification-Documents.pdf/">
                      acceptable identification documents list.{" "}
                    </a>
                  </li>
                  <li>
                    At least two documents from the list of{" "}
                    <a href="https://www2.gnb.ca/content/dam/gnb/Departments/ps-sp/pdf/Services/List2-Acceptable-Proof-of-New-Brunswick-Residency.pdf/">
                      {" "}
                      acceptable proof of New Brunswick residency documents.
                    </a>
                  </li>
                  <li>Must pass vision screening (20/40 best eye).</li>
                </ul>
              </h3>

              <p className="ui purple right ribbon label">Reviews</p>
              <Comments />
              <Comments />
              <Comments />
              <p></p>
            </div>
          </div>
        </div>

        {/* right button */}
        <div className="buttons">
          <div className="containerr">
            <button
              className="btnn effect01"
              onClick={() => this.onRightButtonClick("true")}
            >
              <span>Learn More !</span>
            </button>
            {activeModalStatus === "true" ? (
              <Modal
                title="Package 2"
                content={content}
                actions={buttons}
                closeButton={closeButton}
              />
            ) : null}
          </div>
        </div>

        {/* left button */}
        <div className="buttons" id="btn_2">
          <div className="containerr">
            <button
              className="btnn effect01"
              onClick={() => this.onLeftButtonClick("true")}
            >
              <span>Learn More !</span>
            </button>
            {activeModalStatus_for_left_button === "true" ? (
              <Modal
                title="Package 2"
                content={content}
                actions={buttons}
                closeButton={closeButton2}
              />
            ) : null}
          </div>
        </div>
      </>
    );
  }

  render() {
    return (
      <>
        <React.Fragment>
          <div>{this.renderList()}</div>
        </React.Fragment>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { modal: state.modal, left: state.left };
};

export default connect(mapStateToProps, {
  activeModal,
  activeMenu,
  leftButton,
})(Package2);
