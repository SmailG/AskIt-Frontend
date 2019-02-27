import './style.css';
import React, { Component }  from 'react';
import { Icon,  Card } from 'semantic-ui-react';

const Answer = ({ answer, voteHandler, user }) => {

    // If you wonder why I didn't use anon funcs in render it's because each time the component rerenders the funcs will be recreated this way only once
    const upvote = () => {
        voteHandler(answer.answerId, true);
    }

    const downvote = () => {
        voteHandler(answer.answerId, false);
    }

    const hasUpvoted = answer.upvoters && answer.upvoters.filter( u => u.userId === user.userId).length > 0;
    const hasDownvoted = answer.upvoters && answer.downvoters.filter( u => u.userId === user.userId).length > 0;

    return (
        <div className="answer">
        <Card raised className="single-question-content">
                        <Card.Content className="question-content" header={answer.content} />
                        <Card.Content extra className="question-actions">
                            <span className="action" onClick={upvote}>
                                <Icon name={hasUpvoted ? 'thumbs up' : 'thumbs up outline'} />
                                {answer.upvoters.length + " likes"}
                            </span>
                            <span className="action" onClick={downvote}>
                                <Icon name={hasDownvoted ? 'thumbs down' : 'thumbs down outline'} />
                                {answer.downvoters.length + " dislikes"}
                            </span>
                    </Card.Content>
                </Card>
        </div>
    ); 
}

export default Answer;