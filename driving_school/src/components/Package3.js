import React from "react";
import Comments from './Comments';
import { connect } from "react-redux";
import { activeModal , activeMenu , leftButton } from "../actions";
import {Link} from 'react-router-dom';
import Modal from './Modal';
import history from '../histoy';

class Package3 extends React.Component {

onLeftButtonClick = (path) => {
 this.props.leftButton(path)
}
onRightButtonClick = (path) => {
  this.props.activeModal(path);
};
  
onDismiss= () => {
  this.props.activeModal("false");
  history.push("/pkgs");
}

onDismissForLeftButton = () => {
  this.props.leftButton("false");
  history.push("/pkgs");
}

onCancelClick = (path) => {
  this.props.activeModal(path)
  this.props.leftButton(path)
}

onBookNowClick = (path) => {
  this.props.activeModal(path)
  this.props.leftButton(path)
  this.props.activeMenu("appointment")
}

  renderList(){
    const activeModalStatus = this.props.modal;
    const activeModalStatus_for_left_button = this.props.left;
    const buttons = (
      <React.Fragment>
         <Link to="/book-apnt" onClick={() => this.onBookNowClick("false") } className="ui positive right labeled icon button"> <i className="right arrow icon"></i>
               Book Now ! 
          </Link>
         
          <Link to="/pkgs/p3" onClick={() => this.onCancelClick("false") } className="ui black button">Cancel</Link>
          {/* <Link to="/pkgs" onClick={() => this.props.activeModal("false") } 
              className="mini grey circular ui icon button" style={{float:'right'}}>

          </Link> */}
      </React.Fragment>
    )
    return (
      <>
      <div className="ui two column grid"
           style={{ marginLeft: "0px", marginTop: "30px" }}
      >
      <div className="column" >
          <div className="ui raised segment">
                <p className="ui red ribbon label">Overview</p>
                    <h3>Package3
                    </h3>
                
                <p className="ui blue ribbon label" style={{marginTop: '19px'}}>Package Content</p>
                <h3>The binary driving school's package 1 offers courses for new drivers of all ages for class 5 license, which includes:
                    <ul className="list-unstyled">
                        <li style={{marginBottom:"5px"}}>20 hrs theory done in a classroom setting - a G1 license is NOT required to start in-class </li>
                        <li style={{marginBottom:"5px"}}>10 hours e-learning done online</li>
                        <li style={{marginBottom:"5px"}}>The Binary Driving School student workbook</li>
                        <li style={{marginBottom:"5px"}}>Private in-vehicle lessons in an automatic transmission vehicle with Emergency Maneuvers</li>
                        <li style={{marginBottom:"5px"}}>Free online Co-Driver Program for parents and other driving coaches</li>
                        <li style={{marginBottom:"5px"}}>Free CogniFit New Driver cognitive training for students</li>  
                    </ul>
                </h3>
        </div>
      </div>
      
      <div className="column" >
        <div className="ui segment">
          <p className="ui orange right ribbon label">Documents Required</p>
          <h3>Our program is a Ministry of Transportation Approved Beginner Driver Education Course which requires mandatory documents which are:
                  <ul className="list-unstyled">
                      <li >At least one document from the <a href="https://www2.gnb.ca/content/dam/gnb/Departments/ps-sp/pdf/Services/List1-Acceptable-Identification-Documents.pdf/">acceptable identification documents list. </a></li>
                      <li>At least two documents from the list of <a href="https://www2.gnb.ca/content/dam/gnb/Departments/ps-sp/pdf/Services/List2-Acceptable-Proof-of-New-Brunswick-Residency.pdf/"> acceptable proof of New Brunswick residency documents.</a></li>
                      <li>Proof of name change if applicable</li>
                  </ul>
          </h3>

          <p className="ui purple right ribbon label">Reviews</p>
            <Comments/>
            <Comments/>
            <Comments/>
            <p></p>
        </div>
      </div>
    </div>

      {/* right button */}
     <div className="buttons" >
          <div className="containerr">
            <button className="btnn effect01" onClick={()=>  this.onRightButtonClick("true")}>
              <span>Learn More !</span>
            </button>
            {activeModalStatus === "true" ? (
              <Modal
                title="Right - Package3"
                content="Package3 - How's it going Buddy!"
                actions={buttons}
                onDismiss={this.onDismiss}
              />
            ) : null}
          </div>
      </div> 

      {/* left button */}
      <div className="buttons" id="btn_2" >
        <div className="containerr">
          <button className="btnn effect01" onClick={()=>  this.onLeftButtonClick("true")}>
            <span>Learn More !</span>
          </button>
          {activeModalStatus_for_left_button === "true" ? (
              <Modal
                title="Left - Package3"
                content="Package3 - How's it going Buddy!"
                actions={buttons}
                onDismiss={this.onDismissForLeftButton}
              />
            ) : null}
        </div>
      </div>
      </>
    )
  }


  render() {
    return (
      <>
      <React.Fragment>
        <div>{this.renderList()}</div>
         
    </React.Fragment>

    </>
    )
  }
}

const mapStateToProps = (state) => {
  return { modal: state.modal, left: state.left}
}

export default connect(mapStateToProps, {activeModal, activeMenu , leftButton})(Package3);
