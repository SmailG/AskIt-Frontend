import './style.css';
import React, { Component }  from 'react';
import Answer from './answer';
import { Button, Form } from 'semantic-ui-react'

const AnswerList = ({
    answers,
    token,
    answerVal,
    submitAnswer,
    voteHandler,
    handleChange,
    error,
    user }) => {
    return (
        <div className="answers">
            {answers.map( answer => <Answer key={answer.answerId} voteHandler={voteHandler} answer={answer} user={user} />)}
            {token && 
                <div className="submit-answer">
                    <h3 className="submit-answer-text">Submit your answer</h3>
                    <textarea value={answerVal} onChange={handleChange} name="" id="" cols="80" rows="10"></textarea>
                    <Button primary className="submit-answer-btn" onClick={submitAnswer} >Submit</Button>
                </div>
            }
        </div>
    ); 
}

export default AnswerList;