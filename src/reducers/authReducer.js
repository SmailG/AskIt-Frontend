const initalState = {
	request: { pending: false, error: false, fulfilled: false },
	authData: {
		userName: '',
		password: '',
		email: ''
	},
	errorMessage: ''
};

export default function reducer (state = initalState, action) {
	switch (action.type) {
		case 'LOG_IN_PENDING':
			return {
				...state,
				request: { ...state.request, pending: true, error: false, fulfilled: false }
			};
		case 'LOG_IN_REJECTED':
			return {
				...state,
				request: { ...state.request, pending: false, error: true, fulfilled: false },
				errorMessage: action.payload.message
			};
		case 'LOG_IN_FULFILLED':
			localStorage.setItem('token', action.payload.token)
			localStorage.setItem('user', JSON.stringify(action.payload.user))
			return {
				...state,
				request: { ...state.request, pending: false, error: false, fulfilled: true },
				authData: { userName: '', password: '', email: ''}
            }
        case 'REGISTER_PENDING':
			return {
				...state,
				request: { ...state.request, pending: true, error: false, fulfilled: false }
			};
		case 'REGISTER_PREJECTED':
			return {
				...state,
				request: { ...state.request, pending: false, error: true, fulfilled: false }
			};
		case 'REGISTER_FULFILLED':
			return {
				...state,
				request: { ...state.request, pending: false, error: false, fulfilled: true },
			}
		case 'UPDATE_AUTH_DATA':
			return {
				...state,
				authData: {
					...state.authData,
					[action.payload.name]: action.payload.value
				}
			}
		case 'RESET_AUTH_DATA':
			return {
				...state,
				authData: action.payload
			}
		case 'SET_ERROR':
			return {
				...state,
				errorMessage: action.payload
			}
		case 'LOG_OUT':
			return {
				...state,
				errorMessage: action.payload
			}
		default:
			return state;
	}
}

