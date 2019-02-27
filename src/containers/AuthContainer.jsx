import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DashboardContainer.css';
import AuthForm from '../components/auth/authForm.jsx';
import { validateAuthData } from '../helpers/authHelpers';
import {
	switchSidebarMode,
	login,
	register,
	updateAuthData,
	setAuthError
} from '../actions';


const mapStateToProps = (state, ownProps) => {
	console.log(state.auth.errorMessage, 'log')
	return {
		sidebarMode: ownProps.mode ? ownProps.mode : state.ui.sidebarMode,
		authData: state.auth.authData,
		authError: state.auth.errorMessage
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		switchSidebarMode: ownProps.switchMode ? ownProps.switchMode : (mode) => dispatch(switchSidebarMode(mode)),
		updateAuthData: (name, value) => dispatch(updateAuthData(name, value)),
		login: (data) => dispatch(login(data)),
		register: (data) => dispatch(register(data)),
		setAuthError: (error) => dispatch(setAuthError(error))   
	}
}

class AuthContainer extends Component {

	submitHandler = () => {
		if(validateAuthData(this.props.authData, this.props.sidebarMode)) {
			this.props.setAuthError('');
			this.props.sidebarMode === 'login'
			? this.props.login(this.props.authData)
			: this.props.register(this.props.authData)	
		} else {
			this.props.setAuthError("Fields can't be empty");
		}
    }
    
    switchSidebarMode = (e) => {
		this.props.switchSidebarMode(this.props.sidebarMode === 'login' ? 'register' : 'login');
	}

	handleAuthFormInputChange = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		this.props.updateAuthData(field, value);
	}

	render () {
		const {
			sidebarMode,
			authData,
			authError } = this.props;

		return ( 
             <AuthForm
				error={authError}
				authData={authData}
				handleChange={this.handleAuthFormInputChange}
				mode={sidebarMode}
				switchMode={this.switchSidebarMode}
				submitHandler={this.submitHandler}
				 />
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);