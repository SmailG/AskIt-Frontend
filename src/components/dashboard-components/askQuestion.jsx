import './style.css';
import React, { Component }  from 'react';
import { Button, Input } from 'semantic-ui-react'

const AskQuestion = ({ askQuestion }) => {

    return (
        <div className="ask-question-container">
        <h2 className="askit-header">Don't know ? Ask it!</h2>
            <div className="control-container">
                <Input className="ask-box"></Input>
                <Button primary size="big" onClick={askQuestion} >Ask !</Button>
            </div>
        </div>

    );
}

export default AskQuestion;