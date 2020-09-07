import React from "react";
import { Field, reduxForm } from "redux-form";
import "../CSS Styles/Appointment.css";
import apnt from "../CSS Styles/apnt.png";
import ReCAPTCHA from "react-google-recaptcha";

class Appointment extends React.Component {
  locations = [ { location: 'Select Loaction', value: '' },
  { location: 'Fredericton', value: 'FR' },
  { location: 'Moncton', value:'MC' },
  { location: 'Woodstock', value:'WS'  }, 
  { location: 'Saint John', value:'SJ' } ];

  province = [ { prv: 'Select Province', value: '' },
  { prv: 'New Brunswick', value: 'NB' },
  { prv: 'Quebec', value:'QC' },
  { prv: 'Prince Edward Island', value:'PEI'  }, 
  { prv: 'Nova Scotia<', value:'NS' } ];

  reach = [ { way: 'Phone'},
  { way: 'Email' },
  { way: 'SMS' } ];

  
  renderInput({ input, label, placeholder, type, id  }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} type={type} placeholder={placeholder} id={id} />
      </div>
   
    );
  }

  captcha(props){
    return (
     <div >
        <ReCAPTCHA sitekey="6LehF8gZAAAAAAc_aFaxKIeei_qQ6a2yEmytFe76" onChange={props.input.onChange}/>
      </div>
    )
  }
 
  onSubmit(formValues) {
    console.log(formValues);
  }
  render() {
    console.log(this.props);
    return (
      <>
        <div className="ui internally celled grid">
          <div className="main_pagee">
            <div className="one wide column">
              <p className="btn-shine" target="_blank">
                Book An Appointment
              </p>
            </div>

            <div className="ten wide column">
              <p className="head" id="advanced_text">
                Book in Advance <br />
                <span>Save Your Time</span>
              </p>
              <i className="big calendar check outline icon mystyle" id="calender_icon"></i>
                <h4 id="calender_icon_text"> Request Appointment with any of our <br/>certified trainers.</h4>
                  <p id="calender_icon_p">
                    Request appointments with any of our <br/> trainers in all specialities across all NMC hospitals.
                  </p>
              <i className="big users icon " id="users"></i>
                <h4 id="user_icon_text">Request Appointment with any of our <br/>certified trainers.</h4>
                  <p id="user_icon_p">
                    Request appointments with any of our <br/> trainers in all specialities across all NMC hospitals.
                  </p>
              <i className="big thumbs up icon " id="thumb"></i>
                <h4 id="thumb_icon_text">Request Appointment with any of our <br/>certified trainers.</h4>
                  <p id="thumb_icon_p">
                    Request appointments with any of our <br/> trainers in all specialities across all NMC hospitals.
                  </p>
            </div>

          <div className="ui inverted segment" id="form" >
          <h3 id="header-appoint1">Personal Information</h3>
          <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui inverted form" >
              {/* Personal Information */}
            <div className="three fields">
                <Field name="first_name" component={this.renderInput} label="First Name" type="text" placeholder="Enter First Name"   />
                <Field name="last_name" component={this.renderInput} label="Last Name" type="text" placeholder="Enter Last Name"  />
                <Field name="dob" component={this.renderInput} label="Date of Birth" type="date" id="dob" />
            </div>

            {/* Contact Information */}
            <hr style={{opacity: '0.4'}}/>
            <h3 id="header-appoint1" style={{marginTop: '4px'}}>Contact Information</h3>
            <div className="three fields">
              <div className="field">
                <label>Location</label>
                {/* <Field name="location" component={this.renderSelect} label="Location" data={this.locations} valueField="value" textField="location"/> */}
                <Field name="location" component="select">
                    {this.locations.map((item) => (
                      <option key={item.location} value={item.value}>
                        {item.location}
                        </option>
                      ))}
                </Field>
              </div>
              <Field name="street_no" component={this.renderInput} label="Street Number" type="text" placeholder="Enter Street Number" />
              <Field name="street_name" component={this.renderInput} label="Street Name" type="text" placeholder="Enter Street Name" />
              <div className="field">
                <label>Province</label>
                <Field name="province" component="select">
                    {this.province.map((item) => (
                      <option key={item.prv} value={item.value}>
                        {item.prv}
                        </option>
                      ))}
                </Field>
              </div>         
            </div>

            <div className="three fields">
              <Field name="postal" component={this.renderInput} label="Postal Code" type="text" placeholder="Enter Postal Address" />
              <Field name="phone" component={this.renderInput} label="Phone Number" type="tel" placeholder="XXX-XXX-XXXX" />
              <Field name="email" component={this.renderInput} label="Email" type="email" placeholder="Enter Email Address" />
            </div>

          {/* Driver License Number*/}
          <hr style={{opacity: '0.4'}}/>
          <h3 id="header-appoint1" style={{marginTop: '4px'}}>Driver License Number(If Applicable)</h3>
          <div className="one field" >
            <Field name="driver_lic_no" component={this.renderInput} label="Driver License Number" type="text" placeholder="Enter Driver License Number" />
          </div>

          {/* Best Way To Reach You*/}             
          <hr style={{opacity: '0.4'}}/>
          <h3 id="header-appoint1" style={{marginTop: '4px'}}>Best Way To Reach You?</h3>
          <div className="field">
            <label>Please Select The Best Way To Reach You.</label>
            <Field name="best way to reach you" component="select">
                {this.reach.map((item) => (
                  <option key={item.way} >
                    {item.way}
                    </option>
                  ))}
            </Field>
          </div> 

          {/* ReCAPTCHA*/} 
          <hr style={{opacity: '0.4', marginBottom: '10px'}}/>
          <Field name='captcharesponse' component={this.captcha}/>
      

          <div className="inline field" style={{marginTop: '10px'}}>
              <div className="ui checkbox">
              <Field name="checkbox" component={this.renderInput} label="I agree to the terms and conditions" type="checkbox" placeholder="Enter Driver License Number" />
              </div>
          </div>

           <button className="black ui submit button">Submit</button>          
          
          </form>
          
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default reduxForm({ form: "bookAppointment" })(Appointment);
