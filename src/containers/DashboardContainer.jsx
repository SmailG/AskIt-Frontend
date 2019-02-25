import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DashboardContainer.css';
import AskQuestion from '../components/dashboard-components/askQuestion.jsx';
import QuestionOverview from '../components/dashboard-components/questionOverview.jsx';
import UserContainer from './UserContainer.jsx';
import LoginForm from '../components/login/loginForm.jsx';
import {
	getQuestions,
	getMoreQuestions,
	selectTab,
	loadMoreQuestions
} from '../actions';


const mapStateToProps = (state, ownProps) => {
	return {
		dashboardTabs: state.ui.dashboardTabs,
		selectedTab: state.ui.selectedTab,
		uiState: state.ui.request,
		questions: state.questions.data,
		hasToken: localStorage.getItem('token'),
		hasMoreQuestions: state.questions.hasMore
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		loadMoreQuestions: (skip, take, criteria) => dispatch(loadMoreQuestions(skip, take, criteria)),
		getQuestions: (skip, take, criteria) => dispatch(getQuestions(skip, take, criteria)),
		selectTab: (tab) => dispatch(selectTab(tab))
	}
}

class DashboardContainer extends Component {

	componentDidMount () {
		this.selectTab(this.props.dashboardTabs[0]);
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
			hasMoreQuestions } = this.props;

			return (
			 <div className="container">
				<AskQuestion />
				<div className="content-container">
					<QuestionOverview
						tabs={dashboardTabs}
						selectTab={this.selectTab}
						selectedTab={selectedTab}
						questions={questions}
						loadMore={this.props.loadMoreQuestions}
						hasMoreQuestions={hasMoreQuestions}
						/>
					{ true ?
						<UserContainer />
						: <LoginForm></LoginForm>
					}
				</div>
			 </div>

		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);