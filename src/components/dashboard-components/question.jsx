import './style.css';
import { Link } from 'react-router-dom';
import React, { Component }  from 'react';
import { Icon,  Card } from 'semantic-ui-react'

const Question = ({ question }) => {

    return (
        <Link to={`/question/${question.questionId}`}>
        <Card raised className="question-card">
            <Card.Content header={question.content} />
            <Card.Content extra>
                <span className="action-field">
                    <Icon name='thumbs up outline' />
                    {question.upvoters.length + " likes"}
                </span>
                <span className="action-field">
                    <Icon name='thumbs down outline' />
                    {question.downvoters.length + " dislikes"}
                </span>
                <span className="action-field">
                    <Icon name='comment outline' />
                    {question.answerCount + " answers"}
                </span>
            </Card.Content>
        </Card>
    </Link>  
    );
}

export default Question;