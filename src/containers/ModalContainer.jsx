import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ModalContainer.css';
import { Modal } from 'semantic-ui-react'
import {
  openModal,
  updateAuthData,
  login,
  setAuthError
} from '../actions';
import AuthContainer from './AuthContainer';

const mapStateToProps = (state, ownProps) => {
	return {
		dashboardTabs: state.ui.dashboardTabs,
		selectedTab: state.ui.selectedTab,
		uiState: state.ui.request,
		questions: state.questions.data,
		token: localStorage.getItem('token'),
		hasMoreQuestions: state.questions.hasMore,
		sidebarMode: state.ui.sidebarMode,
		user: state.user.user,
    popupMode: state.ui.popupMode,
    authData: state.auth.authData
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
    openModal: (isOpen) => dispatch(openModal(isOpen)),
    updateAuthData: () => dispatch(updateAuthData),
    setAuthError: (err) => dispatch(setAuthError(err))
	}
}

class ModalContainer extends Component {

  constructor(props) {
      super(props);

      this.state = {
        mode: 'login'
      }
  }

  switchMode = () => {
    this.setState({ mode: this.state.mode === 'login' ? 'register' : 'login' });
  }

  closeHandler = () => {
    this.props.setAuthError('');
    this.setState({ mode: 'login' });
    this.props.openModal(false);
  }

	render () {
			return (
			 <div>
          <Modal
            size='tiny'
            open={this.props.isOpen}
            centered={false}
            onClose={this.closeHandler}>
            <Modal.Header>You need to be logged in to do this</Modal.Header>
            <Modal.Content>
              <AuthContainer switchMode={this.switchMode} mode={this.state.mode} />
            </Modal.Content>
          </Modal>
        </div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
