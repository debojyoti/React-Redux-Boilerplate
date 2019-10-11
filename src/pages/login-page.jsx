import React, { Component } from 'react';
import { connect } from "react-redux";
import { showLoader, hideLoader } from '../redux/actions/loader-data';
import { updateUserData } from '../redux/actions/user-data';

class LoginPage extends Component {
    state = {  }

    componentDidMount() {
        this.props.showLoader('Loading');
        setTimeout(() => {
            this.props.hideLoader();
        }, 2000);
    }

    render() { 
        return (  
            <React.Fragment>
                Login Page
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
  