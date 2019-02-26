import { sortQustions } from "../helpers/questionHelpers";
import {
	logOut,
	setUser,
	switchSidebarMode,
	openModal } from "../actions";



const askItMiddleWare = store => next => (action) => {
	console.log(action.type)
	if (action.type === 'GET_QUESTIONS_FULFILLED') {
		if(action.payload.length) {
            action.payload = sortQustions(action.payload, store.getState().ui.selectedTab.criteria);
        }   
	} else if (action.type === 'GET_MORE_QUESTIONS_FULFILLED') {
		if(action.payload.length) {
			const questions = [...store.getState().questions.data, ...action.payload];
            action.payload = sortQustions(questions, store.getState().ui.selectedTab.criteria);
        }   
	} else if (action.type === 'LOG_OUT') {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		window.location.reload();
	} else if (action.type === 'CHANGE_USER_PASSWORD_FULFILLED') {
		store.dispatch(logOut());

	} else if (action.type === 'LOG_IN_FULFILLED') {
		store.dispatch(openModal(false));
		if(action.payload.user) store.dispatch(setUser(action.payload.user));
	} else if(action.type === 'REGISTER_FULFILLED') {
		store.dispatch(openModal(false));
		store.dispatch(switchSidebarMode('login'))
	}
	

	next(action);
};

export default askItMiddleWare;