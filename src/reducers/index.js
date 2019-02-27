import { combineReducers } from 'redux';

import auth from './authReducer';
import answers from './answerReducer';
import questions from './questionReducer';
import ui from './uiReducer';
import user from './userReducer'

export default combineReducers({
	user,
	auth,
	answers,
	questions,
	answers,
	ui
});