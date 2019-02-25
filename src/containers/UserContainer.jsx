import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserContainer.css';

const mapStateToProps = (state, ownProps) => {
	return {
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
	}
}

class UserContainer extends Component {
	render () {
		return (
			 <div className="container">
			 </div>

		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);