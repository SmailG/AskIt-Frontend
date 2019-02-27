import './style.css';
import React, { Component }  from 'react';
import Answer from './answer';
import { Button, Form } from 'semantic-ui-react'

const AnswerList = ({
    answers,
    token,
    handleSubmit,
    voteHandler,
    handleChange,
    error,
    user }) => {

    return (
        <div className="answers">
            {answers.map( answer => <Answer key={answer.answerId} voteHandler={voteHandler} answer={answer} user={user} />)}
        </div>
    ); 
}

export default AnswerList;