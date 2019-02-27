const initalState = {
	request: { pending: false, error: false, fulfilled: false },
	data: []
};

export default function reducer (state = initalState, action) {
	switch (action.type) {
		case 'GET_ANSWERS_PENDING':
			return {
				...state,
				request: { ...state.request, pending: true, error: false, fulfilled: false }
			};
		case 'GET_ANSWERS_PREJECTED':
			return {
				...state,
				request: { ...state.request, pending: false, error: true, fulfilled: false }
			};
		case 'GET_ANSWERS_PFULFILLED':
			return {
				...state,
				request: { ...state.request, pending: false, error: false, fulfilled: true },
				data: action.payload
            }
		default:
			return state;
	}
}

