import './style.css';
import React, { Component } from 'react';
import { Card, Button, Image } from 'semantic-ui-react'

const UserProfile = ({
	user,
	switchMode,
	logOut }) => {

	if(user)
	return (
		<Card className="user-container">
			<Card.Content>
				<Image floated='right' size='mini' src='/images/avatar/large/steve.jpg' />
				<Card.Header>Welcome {user.userName}</Card.Header>
				<Card.Meta className="user-details">{user.email}</Card.Meta>
				<Card.Description className="user-data">
					Registered on: <strong>not implemented</strong>
				</Card.Description>
				<Card.Description className="user-data">
					Questions asked: <strong>not implemented</strong>
				</Card.Description>
				<Card.Description className="user-data">
					Answers given: <strong>not implemented</strong>
				</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<div className='ui two buttons'>
					<Button onClick={switchMode} primary>
						Change password
         			</Button>
					<Button onClick={logOut} >
						Logout
         			</Button> 
				</div>
			</Card.Content>
		</Card>
	);

	return null;
}

export default UserProfile;