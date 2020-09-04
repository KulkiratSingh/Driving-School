import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
    componentDidMount() { // we load up our client part of the lib just one time when this component is rendered onto the screen. We I am definied compdidmount
        window.gapi.load('client:auth2' , () => { //So after we successfully loadup the client lib then we want to initialize our application with the clientId 
            window.gapi.client.init({
                clientId: '629959818262-b6s9108a4ig7h8maqitklg24a8bg5bk5.apps.googleusercontent.com',
                scope: 'email'
            }).then( () => { //this arrow func is automatically invoked after our lib is initalize itself
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        }) 
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
          this.props.signIn(this.auth.currentUser.get().getId());
        } else {
          this.props.signOut();
        }
      }

      onSignInClick = () => {
        this.auth.signIn();
      }
    
      onSignOutClick = () => {
        this.auth.signOut();
      }
    
    renderAuthButton() 
    {
        if (this.props.isSignedIn === null) 
        {
            return null;
        } 
        else if (this.props.isSignedIn) 
        {
            return (
                <button onClick={this.onSignOutClick} className="ui violet google button">
                <i className="google icon" />
                Sign Out
            </button>
            )
        } 
        else 
        {
            return (
                <button onClick={this.onSignInClick} className="ui violet google button" style={{marginTop: '2px'}}>
                <i className="google icon" />
                Sign In using Google
                </button>
            );
        }
    }
  
    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn };
  };
  
  export default connect(mapStateToProps, { signIn, signOut } )(GoogleAuth);

