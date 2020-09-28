import React from "react";
import { Field, reduxForm, reset } from "redux-form";
import "../CSS Styles/Appointment.css";
import { Link } from "react-router-dom";
import thanku from "../CSS Styles/thanku.png";
import ReCAPTCHA from "react-google-recaptcha";
import { connect } from "react-redux";
import { submitForm, activeMenu } from "../actions";
import  Modal_Apnt  from "./Modal_Apnt";
import history from '../histoy';


class Appointment extends React.Component {
  locations = [
    { location: "Select Loaction", value: "" },
    { location: "Fredericton", value: "FR" },
    { location: "Moncton", value: "MC" },
    { location: "Woodstock", value: "WS" },
    { location: "Saint John", value: "SJ" },
  ];

  province = [
    { prv: "Select Province", value: "" },
    { prv: "New Brunswick", value: "NB" },
    { prv: "Quebec", value: "QC" },
    { prv: "Prince Edward Island", value: "PEI" },
    { prv: "Nova Scotia", value: "NS" },
  ];

  reach = [
    { way: "Select", value: "" },
    { way: "Phone", value: "phone" },
    { way: "Email", value: "email" },
    { way: "SMS", value: "sms" },
  ];

  renderError = ({ error, touched }) => {
    if (this.props.isFormSubmitted && touched && error) {
      return (
        <div className="ui tiny error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, placeholder, type, id, meta }) => {
    const className = `field ${this.props.isFormSubmitted && meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} type={type} placeholder={placeholder} id={id}  />
        {this.renderError(meta)}
      </div>
    );
  };


  renderSelect = ({ input, label, data, meta }) => {
    const className = `field ${this.props.isFormSubmitted && meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <select {...input}>
          {data.map((item, index) => (
            <option key={index} value={item.value}>
              {item.location}
              {item.prv}
              {item.way}
            </option>
          ))}
        </select>
        {this.renderError(meta)}
      </div>
    );
  };

  captcha = (props) => {
    return (
      <div>
        <ReCAPTCHA
          sitekey="6LdzBs4ZAAAAAOqqdxjorR5A4lZRt9N2281uHdlq"
          onChange={props.input.onChange}
        />
        {this.renderError(props.meta)}
      </div>
    );
  }

  onSubmit(formValues) {
    return this.props.dispatch(reset("bookAppointment"));
  }

  onSubmitClick = () => {
    this.props.submitForm(true);
  };

  onDismiss = () => {
    this.props.submitForm(false);
    history.push("/book-apnt");
  }

  onModalButtonClick = (event) => {
    event.stopPropagation();
    this.props.activeMenu("announcement");
    this.props.submitForm(false);
  };

  renderForm() {
    const content = (
      <React.Fragment>
         <h1  onClick={(e) => e.stopPropagation()} id="thank">THANK YOU!</h1>
          <h3 onClick={(e) => e.stopPropagation()}>
            We have recieved your information and we will be in touch with you
            shortly.
          </h3>
          <h3 onClick={(e) => e.stopPropagation()}>Thank You For Your Time.</h3>
      </React.Fragment>
    )

    const button = (
      <React.Fragment>
        <Link
            to="/ancmt"
            className="ui black ok inverted button"
            onClick={this.onModalButtonClick}
            id="link"
          >
            <i className="checkmark icon"></i>
            Don't Forget To Keep An Eye <br /> On Our Announcements
          </Link>
      </React.Fragment>
    )

    const img = (
      <React.Fragment>
        <img src={thanku} alt="thank-you" onClick={(e) => e.stopPropagation()} id="img" />
      </React.Fragment>
    )

    const activeModalStatus = this.props.isFormSubmitted;
    const {submitSucceeded} = this.props;
    return (
      <>
        <div className="ui internally celled grid">
          <div className="main_pagee">
            <div className="one wide column">
            <h1 id="text_apnt-head">Book An Appointment</h1>
            </div>

            <div className="ten wide column">
              <p className="head" id="advanced_text">
                Book in Advance <br />
                <span>Save Your Time</span>
              </p>
              <i
                className="big calendar check outline icon mystyle"
                id="calender_icon"
              ></i>
              <h4 id="calender_icon_text">
                Request Appointment with any of our <br />
                certified trainers.
              </h4>
              <p id="calender_icon_p">
                Request appointments with any of our <br /> trainers in all
                specialities across all our schools.
              </p>
              <i className="big users icon " id="users"></i>
              <h4 id="user_icon_text_2">
                Book for your friends or any <br />
                of your family members.
              </h4>
              <p id="user_icon_p">
                Get a chance to meet an awesome team
                <br /> at an affordable price.
              </p>
              <i className="big thumbs up icon " id="thumb"></i>
              <h4 id="thumb_icon_text">
                Guaranteed results with our variety
                <br />
                of packages avaialbe
              </h4>
              <p id="thumb_icon_p">
                From our past experiences we guarantee
                <br />
                results when you chose your desired packages.
              </p>
            </div>

            <div className="ui inverted segment" id="form">
              <h3 id="header-appoint1">Personal Information</h3>
              <form
                onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}
                className="ui inverted form error"
              >
                {/* Personal Information */}
                <div className="three fields">
                  <Field
                    name="first_name"
                    component={this.renderInput}
                    label="First Name"
                    type="text"
                    placeholder="Enter First Name"
                  />
                  <Field
                    name="last_name"
                    component={this.renderInput}
                    label="Last Name"
                    type="text"
                    placeholder="Enter Last Name"
                  />
                  <Field
                    name="dob"
                    component={this.renderInput}
                    label="Date of Birth"
                    type="date"
                  />
                </div>

                {/* Contact Information */}
                <hr style={{ opacity: "0.4" }} />
                <h3 id="header-appoint1" style={{ marginTop: "4px" }}>
                  Contact Information
                </h3>
                <div className="three fields">
                  <div className="field">
                    <Field
                      name="location"
                      component={this.renderSelect}
                      label="Location"
                      data={this.locations}
                    />
                  </div>
                  <Field
                    name="street_no"
                    component={this.renderInput}
                    label="Street Number"
                    type="text"
                    placeholder="Enter Street Number"
                  />
                  <Field
                    name="street_name"
                    component={this.renderInput}
                    label="Street Name"
                    type="text"
                    placeholder="Enter Street Name"
                  />
                  <div className="field">
                    <Field
                      name="province"
                      component={this.renderSelect}
                      label="Province"
                      data={this.province}
                      valueField="value"
                      textField="prv"
                    />
                  </div>
                </div>

                <div className="three fields">
                  <Field
                    name="postal"
                    component={this.renderInput}
                    label="Postal Code"
                    type="text"
                    placeholder="Enter Postal Address"
                  />
                  <Field
                    name="phone"
                    component={this.renderInput}
                    label="Phone Number"
                    type="tel"
                    placeholder="XXX-XXX-XXXX"
                  />
                  <Field
                    name="email"
                    component={this.renderInput}
                    label="Email"
                    type="email"
                    placeholder="Enter Email Address"
                  />
                </div>

                {/* Driver License Number*/}
                <hr style={{ opacity: "0.4" }} />
                <h3 id="header-appoint1" style={{ marginTop: "4px" }}>
                  Driver License Number(If Applicable)
                </h3>
                <div className="one field">
                  <Field
                    name="driver_lic_no"
                    component={this.renderInput}
                    label="Driver License Number"
                    type="text"
                    placeholder="Enter Driver License Number"
                  />
                </div>

                {/* Best Way To Reach You*/}
                <hr style={{ opacity: "0.4" }} />
                <h3 id="header-appoint1" style={{ marginTop: "4px" }}>
                  Best Way To Reach You?
                </h3>
                <div className="field">
                  <Field
                    name="best_way_to_reach_you"
                    component={this.renderSelect}
                    label="Please Select The Best Way To Reach You."
                    data={this.reach}
                    valueField="value"
                    textField="way"
                  />
                </div>

                {/* ReCAPTCHA*/}
                <hr style={{ opacity: "0.4", marginBottom: "10px" }} />
                <Field name="captcharesponse" component={this.captcha} />

                <button 
                  onClick={this.onSubmitClick} 
                  className="black ui submit button" 
                  style={{ marginTop: "15px" }} 
                >
                  Submit
                </button>
                {(activeModalStatus && submitSucceeded)  ? (
                 <Modal_Apnt 
                    onDismiss={this.onDismiss}
                    content={content}
                    actions={button}
                    image={img}/>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }

  render() {
    return (
       <div>{this.renderForm()}</div>
      )
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.first_name) {
    errors.first_name = "You must enter your first name.";
  }
  if (!formValues.last_name) {
    errors.last_name = "You must enter your last name.";
  }
  if (!formValues.dob) {
    errors.dob = "You must enter your date of birth. Only 18+ are allowed.";
  }
  if (!formValues.location) {
    errors.location = "You must select your city.";
  }
  if (!formValues.province) {
    errors.province = "You must select your province.";
  }
  if (!formValues.street_no) {
    errors.street_no = "You must enter your street number.";
  }
  if (!formValues.street_name) {
    errors.street_name = "You must enter your street name.";
  }
  if (!formValues.postal) {
    errors.postal = "You must enter your postal code.";
  }
  if (!formValues.phone) {
    errors.phone = "You must enter your phone number.";
  }
  if (!formValues.email) {
    errors.email = "You must enter your email address.";
  }
  if (!formValues.best_way_to_reach_you) {
    errors.best_way_to_reach_you =
      "Please select a best way that we can reach you.";
  }
  if (!formValues.captcharesponse) {
    errors.captcharesponse = "You must complete the captcha.";
  }

  return errors;
};

const mapStateToProps = (state) => {
  return { modal: state.modal, isFormSubmitted: state.formSubmit };
};

const GeneralAppointment = connect(mapStateToProps,{ activeMenu, submitForm })(Appointment);
export default reduxForm({ form: "bookAppointment", validate })(GeneralAppointment);
