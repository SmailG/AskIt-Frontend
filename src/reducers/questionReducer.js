const initalState = {
	request: { pending: false, error: false, fulfilled: false },
	hasMore: true,
	data: [],
	openQuestion: {}
};

export default function reducer (state = initalState, action) {
	switch (action.type) {
		case 'GET_MARKERS':
		break;
		case 'GET_QUESTIONS_PENDING':
			return {
				...state,
				request: { ...state.request, pending: true, error: false, fulfilled: false },
				hasMore: true
			};
		case 'GET_QUESTIONS_REJECTED':
			return {
				...state,
				request: { ...state.request, pending: false, error: true, fulfilled: false }
			};
		case 'GET_QUESTIONS_FULFILLED':
			return {
				...state,
				request: { ...state.request, pending: false, error: false, fulfilled: true },
				data: action.payload
			}
		case 'GET_MORE_QUESTIONS_PENDING':
			return {
				...state,
				request: { ...state.request, pending: true, error: false, fulfilled: false }
			};
		case 'GET_MORE_QUESTIONS_REJECTED':
			return {
				...state,
				request: { ...state.request, pending: false, error: true, fulfilled: false },
				hasMore: false
			};
		case 'GET_MORE_QUESTIONS_FULFILLED':
			return {
				...state,
				request: { ...state.request, pending: false, error: false, fulfilled: true },
				data: action.payload
			}
		case 'GET_SINGLE_QUESTION_PENDING':
			return {
				...state,
				request: { ...state.request, pending: true, error: false, fulfilled: false }
			};
		case 'GET_SINGLE_QUESTION_REJECTED':
			return {
				...state,
				request: { ...state.request, pending: false, error: true, fulfilled: false },
			};
		case 'GET_SINGLE_QUESTION_FULFILLED':
			return {
				...state,
				request: { ...state.request, pending: false, error: false, fulfilled: true },
				openQuestion: action.payload
			}
			case 'QUESTION_VOTE_PENDING':
			return {
				...state,
				request: { ...state.request, pending: true, error: false, fulfilled: false }
			};
		case 'QUESTION_VOTE_REJECTED':
			return {
				...state,
				request: { ...state.request, pending: false, error: true, fulfilled: false },
			};
		case 'QUESTION_VOTE_FULFILLED':
			return {
				...state,
				request: { ...state.request, pending: false, error: false, fulfilled: true },
				openQuestion: action.payload
			}
		

		default:
			return state;
	}
}

