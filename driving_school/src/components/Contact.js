import React from "react";
import faker from "faker";
import { Field, reduxForm, reset } from "redux-form";
import { Link } from "react-router-dom";
import contact_phone_icon from "../CSS Styles/contact-phone-icon.svg";
import email from "../CSS Styles/email.svg";
import Modal_Apnt from "./Modal_Apnt";
import location from "../CSS Styles/location.png";
import smile from "../CSS Styles/smile.png";
import "../CSS Styles/Contact.css";
import ReCAPTCHA from "react-google-recaptcha";
import history from "../histoy";
import { submitForm, activeMenu } from "../actions";
import { connect } from "react-redux";

class Contact extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, type, placeholder, id, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label id="label"> {label} </label>
        <input {...input} type={type} placeholder={placeholder} id={id} />
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
          id={props.id}
        />
        {this.renderError(props.meta)}
      </div>
    );
  };

  onSubmit(formValues) {
    return this.props.dispatch(reset("contactUs"));
  }

  onEmailClick = () => {
    window.location.href = `mailto:${faker.internet.email()} `;
  };

  onPhoneClick = () => {
    window.location.href = `tel:${faker.phone.phoneNumberFormat()}`;
  };

  onDismiss = () => {
    this.props.submitForm(false);
    history.push("/cs");
  };

  onSubmitClick = () => {
    this.props.submitForm(true);
  };

  onModalButtonClick = (event) => {
    event.stopPropagation();
    this.props.activeMenu("announcement");
    this.props.submitForm(false);
  };

  renderHelper() {
    const content = (
      <React.Fragment>
        <h1 onClick={(e) => e.stopPropagation()} id="thank">
          THANK YOU!
        </h1>
        <h3 onClick={(e) => e.stopPropagation()} id="msg-1">
          We have recieved your message and we will be in touch with you
          shortly.
        </h3>
        <h3 onClick={(e) => e.stopPropagation()}>
          Thank You For Your Message.
        </h3>
      </React.Fragment>
    );

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
    );

    const img = (
      <React.Fragment>
        <img src={smile} alt="smile" onClick={(e) => e.stopPropagation()} id="smile" />
      </React.Fragment>
    );

    const activeModalStatus = this.props.isFormSubmitted;
    const { submitSucceeded } = this.props;
    return (
      <>
      <div className="cnct-img"></div>
      <div className="ui internally celled grid" id="cnt-us">
        <div className="ten wide column">
          <h1 id="conv_text">Let's Start A Conversation</h1>
          <h2 className="cnctus" id="cnctus-text">
            Contact Us{" "}
          </h2>
          <p className="text-below-cnct-us">
            Want to know more about our team of BDS? Drop us a message below.
          </p>
        </div>
      </div>
      
        <div className="ui internally celled grid" id="cnt-us">
          <div className="ui segment" id="form2">
            <form
              onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}
              className="ui form error"
            >
              {/* Personal Information */}
              <div className="two fields" id="two_field">
                <Field
                  name="your_name"
                  component={this.renderInput}
                  label="Your Name"
                  type="text"
                  placeholder="Enter Your Name"
                  id="your_name"
                />
                
                <Field
                  name="your_email"
                  component={this.renderInput}
                  label="Your Email"
                  type="email"
                  placeholder="Enter Your Email"
                  id="your_email"
                />
              </div>

              <div className="one field" id="one_field">
                <Field
                  name="subject"
                  component={this.renderInput}
                  label="Subject"
                  type="text"
                  placeholder="What would you like to talk to us about?"
                  id="subject"
                />
              </div>

              <div className="one field" id="one_field_2">
                <Field
                  name="message"
                  component={this.renderInput}
                  label="Your Message"
                  type="text"
                  placeholder="Type away :)"
                  id="message"
                />
              </div>

              <Field name="captcharesponse" component={this.captcha} id="recap" />
              <button onClick={this.onSubmitClick} className="send-butn">
                SEND
              </button>
              {activeModalStatus && submitSucceeded ? (
                <Modal_Apnt
                  onDismiss={this.onDismiss}
                  content={content}
                  actions={button}
                  image={img}
                />
              ) : null}
            </form>
            
    

             
        {/* <div className="ten wide column">
          <img
            src={contact_phone_icon}
            alt="our-phone-number"
            id="cnct-phn-icon"
          />
          <p onClick={this.onPhoneClick} className="cnct_phone_number">
            Call us - Click Here
          </p>

          <img src={email} alt="our-email" id="cnct-email-icon" />
          <p onClick={this.onEmailClick} className="cnct_email_addr">
            Email us - Click Here
          </p>

          <img src={location} alt="our-address" id="cnct-address-icon" />
          <p className="cnct_address">
            611 Jazmyn Wall <br />
            Curtville, E3B0CZ
          </p>
        </div> */}
  
      </div>

      
      </div>
      <div className="ten wide column">
          <img
            src={contact_phone_icon}
            alt="our-phone-number"
            id="cnct-phn-icon"
          />
          <p onClick={this.onPhoneClick} className="call_us_here">
            Call us - Click Here
          </p>

          <img src={email} alt="our-email" id="cnct-email-icon" />
          <p onClick={this.onEmailClick} className="email_us_here">
            Email us - Click Here
          </p>

          <img src={location} alt="our-address" id="cnct-address-icon" />
          <p className="cnct_address">
            611 Jazmyn Wall <br />
            Curtville, E3B0CZ
          </p>
        </div>
      
      </>
    );
  }

  render() {
    return (
      <React.Fragment>
        <div>{this.renderHelper()}</div>
      </React.Fragment>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.your_name) {
    errors.your_name = "You must enter your name.";
  }

  if (!formValues.your_email) {
    errors.your_email = "You must enter your email.";
  }

  if (!formValues.subject) {
    errors.subject = "You must enter a subject for your messsage.";
  }

  if (!formValues.message) {
    errors.message = "You must enter a message.";
  }

  if (!formValues.captcharesponse) {
    errors.captcharesponse = "You must complete the captcha.";
  }

  return errors;
};

const mapStateToProps = (state) => {
  return { isFormSubmitted: state.formSubmit };
};
const GeneralContact = connect(mapStateToProps, { submitForm, activeMenu })(
  Contact
);
export default reduxForm({ form: "contactUs", validate })(GeneralContact);
