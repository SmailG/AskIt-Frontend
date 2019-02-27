import './style.css';
import React, { Component }  from 'react';
import { Button, Input } from 'semantic-ui-react'

const AskQuestion = ({ askQuestion, changeHandler, value }) => {

    return (
        <div className="ask-question-container">
        <h2 className="askit-header">Don't know ? Ask it!</h2>
            <div className="control-container">
                <Input value={value} className="ask-box" name="qustion" onChange={changeHandler}></Input>
                <Button primary size="big" onClick={askQuestion} >Ask !</Button>
            </div>
        </div>

    );
}

export default AskQuestion;