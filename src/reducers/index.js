import { combineReducers } from 'redux';

import auth from './authReducer';
import answer from './answerReducer';
import questions from './questionReducer';
import answers from './userReducer';
import ui from './uiReducer';
import user from './userReducer'

export default combineReducers({
	user,
	auth,
	answer,
	questions,
	answers,
	ui
});