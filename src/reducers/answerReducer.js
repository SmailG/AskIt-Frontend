const initalState = {
	request: { pending: false, error: false, fulfilled: false },
	user: {}
};

export default function reducer (state = initalState, action) {
	switch (action.type) {
		case 'LOG_IN_PENDING':
			return {
				...state,
				request: { ...state.request, pending: true, error: false, fulfilled: false }
			};
		case 'LOG_IN_PREJECTED':
			return {
				...state,
				request: { ...state.request, pending: false, error: true, fulfilled: false }
			};
		case 'LOG_IN_PFULFILLED':
			return {
				...state,
				request: { ...state.request, pending: false, error: false, fulfilled: true },
				user: action.payload
            }
		default:
			return state;
	}
}

