import { combineReducers } from 'redux';

import auth from './authReducer';
import answer from './answerReducer';
import questions from './questionReducer';
import answers from './userReducer';
import ui from './uiReducer';

export default combineReducers({
	auth,
	answer,
	questions,
	answers,
	ui
});