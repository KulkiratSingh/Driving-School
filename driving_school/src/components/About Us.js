import React from 'react';
import '../CSS Styles/aboutUs.css';
import faker from 'faker';
import { Link } from 'react-router-dom';
import { activeMenu } from "../actions";
import { connect } from 'react-redux';
class aboutUs extends React.Component {
    render() {
        return (
    <React.Fragment>
        <div className="about-section">
            <h1 id="about-us">About Us!</h1>
            <h1 id="safe">BDS - Safe</h1> 
            <h1 id="defensive">Defensive</h1>
            <h1 id="driving-d">Driving</h1>
            <h1 id="reliable">Reliable </h1>
            <h1 id="trust">Trustable</h1>
            <h1 id="valuable">Valuable</h1>

            <div className="about-us-desc">
            <p>The Binary Driving School is a modern driving school in the city of Fredericton, New Brunswick, Canada. The aim of our school is to teach safe and defensive driving.</p>
            <p>The Binary Driving School has been educating all levels of drivers in the Fredericton area since 1995. We are proud to be the area's largest driving school with the most great and experienced in-class and in-car instructional team in the region. We have seven (10) full time in-car instructors and one (1) full time office administrators to assist you with your new driving experience.
            Our program exceeds Government standards by offering more classroom training and more road training than what is required under the graduated licensing program as well exceeding insurance company requirements to qualify for insurance premium reductions upon completion of the program. We provide 28 hours of classroom training and 11 hours of road training; surpassing our competitions' programs that provide the minimum of 25 hours ofclassroom training and 10 hours of road training. THIS IS OUR STANDARD PACKAGE NOT A PROMOTION!</p>
            </div>
        

    </div> 
    
    <div class="row" id="ab-sty">
        <div className="tweleve wide column">
    
        <div className="font-styling row">
                <h1 id="our_team">OUR TEAM: </h1>
            <div className="column3">
                <div className="card1">
                    <div className="container3">
                        <h2 id="card-first-name">
                            {faker.name.firstName()}{" "}
                            {faker.name.lastName()}
                            <img src={faker.image.avatar()} alt={faker.name.firstName()} id="card3-img"/>
                        </h2>
                        <p className="title-about">{faker.name.jobTitle()}</p>
                        <p className="job-desc">{faker.name.jobDescriptor()}</p>
                        <p className="job-email">{faker.internet.email()}</p>
                        <Link 
                            to="/cs"
                            onClick={() => this.props.activeMenu("contact")}
                            className="button3"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>

            <div className="column4">
                <div className="card2">
                    <div className="container3">
                        <h2 id="card-first-name">
                            {faker.name.firstName()}{" "}
                            {faker.name.lastName()}
                            <img src={faker.image.avatar()} alt={faker.name.firstName()} id="card3-img"/>
                        </h2>
                        <p className="title-about">{faker.name.jobType()}</p>
                        <p className="job-desc">{faker.name.jobDescriptor()}</p>
                        <p className="job-email">{faker.internet.email()}</p>
                        <Link 
                            to="/cs"
                            onClick={() => this.props.activeMenu("contact")}
                            className="button3"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>

            <div className="column5">
                <div className="card3">
                    <div className="container3">
                        <h2 id="card-first-name">
                            {faker.name.firstName()}{" "}
                            {faker.name.lastName()}
                            <img src={faker.image.avatar()} alt={faker.name.firstName()} id="card3-img"/>
                        </h2>
                        <p className="title-about">{faker.name.jobTitle()}</p>
                        <p className="job-desc">{faker.name.jobDescriptor()}</p>
                        <p className="job-email">{faker.internet.email()}</p>
                        <Link 
                            to="/cs"
                            onClick={() => this.props.activeMenu("contact")}
                            className="button3"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>

            </div>
        </div>
    </div>
        
    </React.Fragment>
        );
    }

   

}

export default connect(null, { activeMenu })(aboutUs);