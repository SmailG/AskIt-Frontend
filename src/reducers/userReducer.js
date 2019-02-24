const initalState = {
	request: { pending: false, error: false, fulfilled: false },
	user: {}
};

export default function reducer (state = initalState, action) {
	switch (action.type) {
		case 'GET_MARKERS':
		break;
		case 'GET_USER_PENDING':
			return {
				...state,
				request: { ...state.request, pending: true, error: false, fulfilled: false }
			};
		case 'GET_USER_REJECTED':
			return {
				...state,
				request: { ...state.request, pending: false, error: true, fulfilled: false }
			};
		case 'GET_USER_FULFILLED':
			return {
				...state,
				request: { ...state.request, pending: false, error: false, fulfilled: true },
				user: action.payload
			}
		default:
			return state;
	}
}

