import React, { Component } from 'react';
import { connect } from "react-redux";
import { showLoader, hideLoader } from '../redux/actions/loader-data';
import { updateUserData } from '../redux/actions/user-data';
import '../assets/login.css'

class LoginPage extends Component {
    state = {  }

    componentDidMount() {
        this.props.showLoader('Loading');
        setTimeout(() => {
            this.props.hideLoader();
        }, 500);
    }

    render() { 
        return (
          <React.Fragment>
            <div className="container">
              <h1>Demo Login</h1>
              <form >
                <input type="text" placeholder="username" className="field" />
                <div className="field-error-wrapper">
                  Invalid Username
                </div>
                <input type="password" placeholder="password" className="field" />
                <div className="field-error-wrapper">
                  Wrong Password
                </div>
                <input type="submit" value="login" className="btn" />
              </form>
              <div className="pass-link">
              </div>
            </div>
          </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
      userData: state.userData
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      showLoader: text => dispatch(showLoader(text)),
      hideLoader: () => dispatch(hideLoader()),
      updateUserData: userData => dispatch(updateUserData(userData))
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginPage);
  