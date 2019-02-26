import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserContainer.css';
import ChangePassword from '../components/user-components/change-password';
import UserProfile from '../components/user-components/user-profile';
import { validateAuthData } from '../helpers/authHelpers';
import {
	changePassword,
	logOut
} from '../actions';

const mapStateToProps = (state, ownProps) => {
	return {
		user: state.user.user,
		error: state.user.error
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		changePassword: (oldPassword, newPassword, email) => dispatch(changePassword(oldPassword, newPassword, email)),
		logOut: () => dispatch(logOut())
	}
}

class UserContainer extends Component {

	constructor (props) {
		super(props);
		
		this.state = {
			data: { oldPassword: '', newPassword: '', confirmPassword: ''},
			mode: 'user-details',
			error: ''
		}
	}

	switchMode = () => {
		this.state.mode === 'user-details'
		? this.setState({ mode: 'change-password' })
		: this.setState({ mode: 'user-details' })
	}

	submitHandler = () => {
		if(validateAuthData(this.state.data, 'change-password')) {
			this.setState({error: ''});
			this.props.changePassword(this.state.data.oldPassword, this.state.data.newPassword, this.props.user.email)
		} else {
			this.setState({error: "Field can't be empty and passwords must match"});
		}
    }

	handleChange = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		this.setState({ data: {...this.state.data, [field]: value } });
	}

	render () {
		const { user, error } = this.props;
		const { data } = this.state;

		return this.state.mode === 'change-password'
		? <ChangePassword error={error} validation={this.state.error} submitHandler={this.submitHandler} data={data} switchMode={this.switchMode} handleChange={this.handleChange} />
		: <UserProfile logOut={this.props.logOut} user={user} switchMode={this.switchMode} />
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);