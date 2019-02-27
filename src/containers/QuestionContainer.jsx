import React, { Component } from 'react';
import { connect } from 'react-redux';
import './QuestionContainer.css';
import { getOneQuestion } from '../actions';
import { Icon,  Card } from 'semantic-ui-react';
import AnswerList from '../components/question-components/answerList';
import {
    upvoteQuestion,
    downvoteQuestion,
    openModal,
    getAnswers
} from '../actions/index';

const mapStateToProps = (state, ownProps) => {
	return {
        question: state.questions.openQuestion,
        token: localStorage.getItem('token'),
        user: state.user.user,
        questionAnswers: state.answers.data
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    dispatch(getOneQuestion(ownProps.match.params.id))
    dispatch(getAnswers(ownProps.match.params.id))
	return {
        downvoteQuestion: (id, userId) => dispatch(downvoteQuestion(id, userId)),
        upvoteQuestion: (id, userId) => dispatch(upvoteQuestion(id, userId)),
        openModal: (isOpen) => dispatch(openModal(isOpen)),
	}
}

class QuestionContainer extends Component {

    questionVoteHandler = (vote) => {
        this.props.token
        ? vote
        ? this.props.upvoteQuestion(this.props.question.questionId, this.props.user.userId)
        : this.props.downvoteQuestion(this.props.question.questionId, this.props.user.userId)
        : this.props.openModal(true)
    }

    answerVoteHandler = (id, vote) => {
        this.props.token
        ? vote
        ? this.props.upvoteAnswer(this.props.question.id, this.props.user.userId)
        : this.props.downvoteAnswer(this.props.question.id, this.props.user.userId)
        : this.props.openModal(true)
    }

    submitAnswer = () => {

    }

    render () {
        const { question, downvoteQuestion, upvoteQuestion, user, token, questionAnswers } = this.props;
        const hasUpvoted = question.upvoters && question.upvoters.filter( u => u.userId === user.userId).length > 0;
        const hasDownvoted = question.upvoters && question.downvoters.filter( u => u.userId === user.userId).length > 0;

        return (
            <div className="question-container">
                { question.questionId && 
                <div className="question">
                {console.log(question)}
                <Card raised className="single-question-content">
                        <Card.Content className="question-content" header={question.content} />
                        <Card.Content extra className="question-actions">
                            <span className="action" onClick={() => this.questionVoteHandler(true)}>
                                <Icon name={hasUpvoted ? 'thumbs up' : 'thumbs up outline'} />
                                {question.upvoters.length + " likes"}
                            </span>
                            <span className="action" onClick={() => this.questionVoteHandler(false)}>
                                <Icon name={hasDownvoted ? 'thumbs down' : 'thumbs down outline'} />
                                {question.downvoters.length + " dislikes"}
                            </span>
                    </Card.Content>
                </Card>
                {questionAnswers &&
                 <AnswerList token={token} voteHandler={this.answerVoteHandler} answers={questionAnswers} user={user} submitAnswer={this.submitAnswer} />
                }
                </div>
                }
            </div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);