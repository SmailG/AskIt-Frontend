import CONSTANTS from '../constants';

const initalState = {
	request: { pending: false, error: false, fulfilled: false },
	dashboardTabs: [
        { id: 1, title: "Most recent", criteria: CONSTANTS.TABS.TAB_ACTION_MOST_RECENT, role: 'any' },
        { id: 2, title: "Most upvoted", criteria: CONSTANTS.TABS.TAB_ACTION_MOST_UPVOTED, role: 'any' },
        { id: 3, title: "Most answered", criteria: CONSTANTS.TABS.TAB_ACTION_MOST_ANSWERED, role: 'any' },
        { id: 4, title: "My questions", role: 'user' },
    ],
    selectedTab: {},
    sidebarMode: "login",
    isModalOpen: false
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
            case 'SELECT_TAB':
                return {
                    ...state,
                    request: { ...state.request, pending: false, error: false, fulfilled: true },
                    selectedTab: action.payload
                }
            case 'SWITCH_SIDEBAR_MODE':
                return {
                    ...state,
                    sidebarMode: action.payload
                }
            case 'OPEN_MODAL':
                return {
                    ...state,
                    isModalOpen: action.payload,
                }

            default:
                return state;
	}
}

