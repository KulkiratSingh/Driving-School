import React, { useRef } from "react";
import {Link, Switch, Route} from 'react-router-dom';
import one from "../CSS Styles/Packages Images/one.png";
import { activePackage, activeModal  } from "../actions";
import { connect } from "react-redux";
import "../CSS Styles/Packages.css";
import Modal from './Modal';
import Package1 from './Package1';
import Package2 from './Package2';
import Package3 from './Package3';
import Package4 from './Package4';
import Package5 from './Package5';
import history from '../histoy';

class Packages extends React.Component {
  
  constructor(props) {
    super(props); 
    this.modalRef = React.createRef();
  }

onBlueMenuClick = (path) => {
  this.props.activePackage(path);
};

componentDidMount() {
  this.modalRef.current.addEventListener('click', () => {
    this.props.activeModal("false");
  })
}

  renderList() {
    const activePackageStatus = this.props.packages;
    const activeModalStatus = this.props.modal;

    return (
      <div ref={this.modalRef}  className="ui internally celled grid" >

      <div className="ten wide column" >
        <img className="image_1" src={one} alt="discover our packages" />

          <div className="top-left">
              <ul className="Words">

                <li className="Words-line">
                  <p id="effects">&nbsp;</p>
                </li>
                <li className="Words-line">
                  <p id="effects"> Discover <i className="black small car icon"></i> </p>
                  <p id="effects">Our</p>
                </li>
                <li className="Words-line">
                  <p id="effects" >Our Packages</p>
                </li>
                <li className="Words-line">
                  <p id="effects" style={{ marginLeft: "300px" }}>
                    <i className=" boxes icon"></i>
                  </p>
                  <p id="effects" >by</p>
                </li>

              </ul>
            </div>

            <div className="ui labeled icon menu" id="menu" style={{backgroundColor: "#09296b"}}>
                <Link  to="/pkgs/p1"
                    id="menu_items_color" 
                    className={`${activePackageStatus === "package_1" ? "active" : ""} item`}
                    onClick={() => this.onBlueMenuClick("package_1")} 
                >
                  <i className={`${activePackageStatus === "package_1" ? "orange" : ""} car icon`} id="menu_items_color" ></i>
                  Package 1
                  
                </Link>

                <Link to="/pkgs/p2" id="menu_items_color"
                   className={`${activePackageStatus === "package_2" ? "active" : ""} item`}
                   onClick={() => this.onBlueMenuClick("package_2")} 
                >
                  <i id="menu_items_color" 
                      className={`${activePackageStatus === "package_2" ? "orange" : ""} motorcycle icon`} >
                  </i>
                  Package 2
                </Link>

                <Link to="/pkgs/p3" id="menu_items_color"
                   className={`${activePackageStatus === "package_3" ? "active" : ""} item`}
                   onClick={() => this.onBlueMenuClick("package_3")} 
                >
                  <i id="menu_items_color" 
                      className={`${activePackageStatus === "package_3" ? "orange" : ""} truck icon`} >
                  </i>
                  Package 3
                </Link>

                <Link to="/pkgs/p4" id="menu_items_color"
                   className={`${activePackageStatus === "package_4" ? "active" : ""} item`}
                   onClick={() => this.onBlueMenuClick("package_4")} 
                >
                  <i id="menu_items_color" 
                      className={`${activePackageStatus === "package_4" ? "orange" : ""} taxi icon`} >
                  </i>
                  Package 4
                </Link>

                <Link to="/pkgs/p5" id="menu_items_color"
                   className={`${activePackageStatus === "package_5" ? "active" : ""} item`}
                   onClick={() => this.onBlueMenuClick("package_5")} 
                >
                  <i id="menu_items_color" 
                      className={`${activePackageStatus === "package_5" ? "orange" : ""} ambulance icon`} >
                  </i>
                  Package 5
                </Link>
            </div>
           

        </div>

        <div className="sixteen wide column">
          <Switch>
                <Route path="/pkgs/p1" exact component={Package1}/>
                <Route path="/pkgs/p2" component={Package2}/>
                <Route path="/pkgs/p3"  component={Package3}/>
                <Route path="/pkgs/p4"  component={Package4}/>
                <Route path="/pkgs/p5"  component={Package5}/>
                <Package1 />
          </Switch>

          {/* <div className="buttons" >
            <div className="containerr">
              <button className="btnn effect01" onClick={()=>  this.onButtonClick("true")}>
                <span>Learne More !</span>
              </button>
              {(activeModalStatus === "true")?<Modal onDismiss={this.onDismiss}/>:null}
            </div>
          </div> */}

          {/* <div className="buttons" id="btn_2" >
            <div className="containerr">
              <button className="btnn effect01" onClick={()=>  this.onButtonClick("true")}>
                <span>Learne More !</span>
              </button>
              {(activeModalStatus === "true")?<Modal/>:null}
            </div>
          </div> */}

        </div>
        
    </div>
    
    )
   
  }

  render() {
    return (
      <React.Fragment>
        <div>{this.renderList()}</div>
         
      </React.Fragment>

    );
  }
}

const mapStateToProps = (state) => {
  return { packages: state.package, modal: state.modal }
}


export default connect(mapStateToProps, {activePackage , activeModal })(Packages);
