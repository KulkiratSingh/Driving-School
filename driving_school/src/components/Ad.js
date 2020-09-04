import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPhotos, activeMenu } from "../actions";
import { Slide } from "react-slideshow-image";
import horse from "../../src/horse.png";
import "../CSS Styles/Ad.css";
import "react-slideshow-image/dist/styles.css";

class Ad extends React.Component {
  componentDidMount() {
    this.props.fetchPhotos();
  }

  styledText() {
    return (
      <div className="cc_text">
        <img
          src={horse}
          alt="horsepower image"
          style={{ marginLeft: "-70px", marginTop: "48px" }}
        />
        <div className="dark fire">
          <h2 className="Blazing">5000+CC</h2>
        </div>
      </div>
    );
  }

  renderList() {
    const headers = [ "Chevrolet Camero SS","Modified Chevrolet Camero SS","Lamborghini Aventador","Ferrari","Mercedes-AMG GTR ","Mustang GT"];
    const price = ["$2000","$4000","$6000", "$2000", "$4000","$6000","$2000","$4000","$6000","$3500",];
    
    const description = [
      <h4>
        Rent a Camaro from us and you'll quickly learn why SS stands for Super
        Sport. Camaro has been synonymous with American muscle for decades, and
        all that V8 power under your right foot does not disappoint. Book an
        appointment with us today to know more.
        <br /> • 6.2L LT1 V-8 <br /> • 6-Speed Manual/Automatic <br /> • 455-HP
      </h4>,
      <h4>
        Rent a modified Camaro from us - this all-blue with black hood is no
        slouch. This 2014 Camaro is Hennessy-tuned, spitting out 638 horsepower
        to the rear wheels. Hennessy is known for creating insanely powerful
        muscle cars, and this one is no exception. The all blue makes this car
        even more aggressive after knowing what kind of power is under the hood.
        Black rims, blue paint, and black headlights look incredible on this car
        and create a look that will send would-be racers running away. Book an
        appointment with us today to know more.
        <br /> • Hennessy-Tuned
        <br /> • 638-HP
        <br /> • 0-60 in 4.1 sec
      </h4>,
      <h4>
        Forget the idea of performance you are used to. The Aventador Coupé has
        been engineered to revolutionize this concept and establish a new
        benchmark in the segment of super sports cars and beyond. This car aims
        to bring the future forward. This is a true supercar legend in the
        making, which combines the tradition of the Lamborghini brand with a
        level of innovation which takes the House of the Raging Bull to hitherto
        unexplored territory. Book an appointment with us today to know more.
        <br /> • 730 to 759 HP
        <br /> • ARAI Mileage 7.69 kmpl
        <br /> • 0-60 in 2.9 sec
      </h4>,
      <h4>
        {" "}
        The Ferrari 488 Pista is powered by the most powerful V8 engine in the
        Maranello marque’s history and is the company’s special series sports
        car with the highest level yet of technological transfer from racing. In
        fact the name, meaning ‘track’ in Italian, was chosen speciﬁcally to
        testify to Ferrari’s unparalleled heritage in motor sports. Technically,
        the Ferrari 488 Pista encompasses all of the experience built up on the
        world’s circuits by the 488 Challenge and the 488 GTE. Book an
        appointment with us today to know more
        <br /> • 711-HP
        <br /> • 7-spd auto-shift
        <br /> • 0-60 in 3.0 sec
      </h4>,
      <h4>
        Developed in the Green Hell, the apt nickname for the beastly
        Nürburgring track, the AMG GT R condenses 50 years of motorsports
        victory into a record-setting 7:10.92 lap time. Lightened, honed and
        fortified, its racing bloodline has been greenlighted for the
        street.Book an appointment with us today to know more
        <br /> • 429 to 630 HP
        <br /> • 7 & 9-speed automatic
        <br /> • 0-60 in 3.5 sec
      </h4>,
      <h4>
        The GT models are motivated by a 460-hp V-8 with an optional active
        exhaust that trumpets a thunderous roar. Both of these compelling
        engines pair with a standard six-speed manual transmission or a 10-speed
        automatic that makes the Mustang quicker than before.
        <br /> • 460-HP
        <br /> • 9 & 10-speed automatic
        <br /> • 0-60 in 3.9 sec
      </h4>,
    ];

    const noStyling = this.props.photos.results.map((image, index) => {
      return {...image,header: headers[index], price: price[index], description: description[index],};
    });

    console.log("Testing", noStyling);

    return noStyling.map((item) => {
      return (
        <div className=" column">
          <h2 style={{marginLeft: '20px'}}>Rental Supercars</h2>
          <div className="ui segment" id="ui_seg">
            <div className="ui items" id="ui_items">
              <div className="item" style={{ marginBottom: "25px" }}>
                {this.styledText()}
                <div className="ui medium image">
                  <img
                    src={item.urls.regular}
                    key={item.id}
                    style={{ marginLeft: "-25px" }}
                  />
                </div>
                <div className="content">
                  <div className="header" style={{}}>
                    {item.header}
                  </div>
                  <div className="meta">
                    <h3 className="price">{item.price}</h3>
                    <span className="stay">1 Month</span>
                  </div>
                  <div className="description">{item.description}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    if (this.props.photos.length !== 0) {
      const list = this.renderList();
      const test2 = list.map((item) => {
        return (
          <div className="each-slide">
            <div>{item}</div>
          </div>
          
        );
      });
      const test_2 = () => {
        return (
          <div>
            <Slide easing="ease">{test2}</Slide>
          </div>
        );
      };

      return (
        <div className="adv">
          {test_2()}
          <Link to="/book-apnt" className="btn" onClick={() => this.props.activeMenu("appointment")}>
            Book Now !
          </Link>
        </div>
      );
    } else {
      return <p>To be loaded</p>;
    }
  }
}

const mapStateToProps = (state) => {
  return { photos: state.pics};
};

export default connect(mapStateToProps, { fetchPhotos, activeMenu })(Ad);
