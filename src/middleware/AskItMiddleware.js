import { sortQustions } from "../helpers/questionHelpers";



const askItMiddleWare = store => next => (action) => {
	if (action.type === 'GET_QUESTIONS_FULFILLED') {
		if(action.payload.length) {
            action.payload = sortQustions(action.payload, store.getState().ui.selectedTab.criteria);
        }   
	}
	if (action.type === 'GET_MORE_QUESTIONS_FULFILLED') {
		if(action.payload.length) {
			const questions = [...store.getState().questions.data, ...action.payload];
            action.payload = sortQustions(questions, store.getState().ui.selectedTab.criteria);
        }   
	}

	next(action);
};

export default askItMiddleWare;