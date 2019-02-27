import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DashboardContainer.css';
import AskQuestion from '../components/dashboard-components/askQuestion.jsx';
import QuestionOverview from '../components/dashboard-components/questionOverview.jsx';
import UserContainer from './UserContainer.jsx';
import AuthContainer from './AuthContainer.jsx'
import {
	getQuestions,
	selectTab,
	loadMoreQuestions,
	switchSidebarMode,
	askQuestion,
	openModal,
	login,
	register,
	updateAuthData,
	setAuthError
} from '../actions';


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
		isModalOpen: state.ui.isModalOpen,
		authData: state.auth.authData,
		authError: state.auth.errorMessage
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		loadMoreQuestions: (skip, take, criteria) => dispatch(loadMoreQuestions(skip, take, criteria)),
		getQuestions: (skip, take, criteria) => dispatch(getQuestions(skip, take, criteria)),
		selectTab: (tab) => dispatch(selectTab(tab)),
		switchSidebarMode: (mode) => dispatch(switchSidebarMode(mode)),
		askQuestion: (content) => dispatch(askQuestion(content)),
		openModal: (mode) => dispatch(openModal(mode)) ,
		updateAuthData: (name, value) => dispatch(updateAuthData(name, value)),
		login: (data) => dispatch(login(data)),
		register: (data) => dispatch(register(data)),
		setAuthError: (error) => dispatch(setAuthError(error))   
	}
}

class DashboardContainer extends Component {

	componentDidMount () {
		this.selectTab(this.props.dashboardTabs[0]);
	}

	askQuestion = (content) => {
		this.props.token ?
		this.props.askQuestion(content, this.props.user.userId)
		: this.props.openModal(true);
	}

	selectTab = (tab) => {
		this.props.getQuestions(0, 20, tab.criteria);
		this.props.selectTab(tab);
		const questionList = document.getElementsByClassName('question-list')[0];
		questionList.scrollTop = 0;
	}

	render () {
		const {
			dashboardTabs,
			selectedTab,
			questions,
			hasMoreQuestions,
			isModalOpen,
			token
			 } = this.props;

			return (
			 <div className="container">
				<AskQuestion askQuestion={this.askQuestion} />
				<div className="content-container">
					<QuestionOverview
						tabs={dashboardTabs}
						selectTab={this.selectTab}
						selectedTab={selectedTab}
						questions={questions}
						loadMore={this.props.loadMoreQuestions}
						hasMoreQuestions={hasMoreQuestions}
						/>
					<div className="sidebar">
						{ token ?
							<UserContainer />
							: <AuthContainer />
						}
					</div>
				</div>
			 </div>

		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);