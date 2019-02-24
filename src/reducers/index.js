import { combineReducers } from 'redux';

import auth from './authReducer';
import answer from './answerReducer';
import questions from './questionReducer';
import answers from './userReducer';

export default combineReducers({
	auth,
	answer,
	question,
	user
});