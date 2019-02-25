import './style.css';
import React, { Component }  from 'react';
import { Icon,  Card } from 'semantic-ui-react'

const Question = ({ question }) => {


    return (
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
    );
}

export default Question;