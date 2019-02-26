const initalState = {
	request: { pending: false, error: false, fulfilled: false },
	token: localStorage.getItem('token'),
	user: JSON.parse(localStorage.getItem('user')),
	error: ''
};

export default function reducer (state = initalState, action) {
	switch (action.type) {
		case 'CHANGE_USER_PASSWORD_PENDING':
			return {
				...state,
				request: { ...state.request, pending: true, error: false, fulfilled: false }
			};
		case 'CHANGE_USER_PASSWORD_REJECTED':
			return {
				...state,
				request: { ...state.request, pending: false, error: true, fulfilled: false },
				error: action.payload.message
			};
		case 'CHANGE_USER_PASSWORD_FULFILLED':
			return {
				...state,
				request: { ...state.request, pending: false, error: false, fulfilled: true },
				user: action.payload
			}
		case 'SET_USER':
			return {
				...state,
				user: action.payload
			}
		default:
			return state;
	}
}

