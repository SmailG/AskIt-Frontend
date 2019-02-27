import {
    questions,
    answers,
    user,
    auth
} from '../api';

export const updateAuthData = (name, value) => ({
    type: 'UPDATE_AUTH_DATA',
    payload: { name, value }
})

export const logOut = () => ({
    type: 'LOG_OUT',
    payload: 'logout'
})

export const resetAuthData = (name, value) => ({
    type: 'RESET_AUTH_DATA',
    payload: {userName: '', password: '', email: ''}
})

export const selectTab = (tab) => ({
    type: 'SELECT_TAB',
    payload: tab
});

export const setAuthError = (err) => ({
    type: 'SET_ERROR',
    payload: err
})

export const openModal = (isOpen) => ({
    type: 'OPEN_MODAL',
    payload: isOpen
})

export const switchSidebarMode = (mode) => ({
    type: 'SWITCH_SIDEBAR_MODE',
    payload: mode
});

export const setUser = (user) => ({
    type: 'SET_USER',
    payload: user
}) 

export const getQuestions = (skip, take, criteria) => {
    const res = questions.getMultiple(skip, take, criteria);

    return {
    type: 'GET_QUESTIONS',
    payload: res
    }
}


export const loadMoreQuestions = (skip, take, criteria) => {
    const res = questions.getMultiple(skip, take, criteria);

    return {
    type: 'GET_MORE_QUESTIONS',
    payload: res
    }
}

export const getOneQuestion = (id) => {
    const res = questions.getSingle(id);

    return {
    type: 'GET_SINGLE_QUESTION',
    payload: res
    }
}

export const askQuestion = (content, userId) => {
    const res = questions.create({ content: content, user: userId })

    return {
        type: 'CREATE_QUESTION',
        payload: res
    }
} 

export const login = (data) => {
    const res = auth.login(data);

    return {
        type: 'LOG_IN',
        payload: res
    }
}

export const register = (data) => {
    const res = auth.register(data);

    return {
        type: 'REGISTER',
        payload: res
    }
}

export const changePassword = (oldPassword, newPassword, email) => {
    const res = user.changePassword({ oldPassword, newPassword, email })

    return {
        type: 'CHANGE_USER_PASSWORD',
        payload: res
    }
}

export const upvoteQuestion = (questionId, userId) => {
    const res = questions.vote({ questionId, userId, vote: 'upvote' })

    return {
        type: 'QUESTION_VOTE',
        payload: res
    }
}

export const downvoteQuestion = (questionId, userId) => {
    const res = questions.vote({ questionId, userId, vote: 'downvote' })

    return {
        type: 'QUESTION_VOTE',
        payload: res
    }
}

export const upvoteAnswer = (answerId, userId) => {
    const res = answers.vote({ answerId, userId, vote: 'upvote' })

    return {
        type: 'ANSWER_VOTE',
        payload: res
    }
}

export const downvoteAnswer = (answerId, userId) => {
    const res = answers.vote({ answerId, userId, vote: 'downvote' })

    return {
        type: 'ANSWER_VOTE',
        payload: res
    }
}

export const getAnswers = (id) => {
    const res = answers.getAnswers(id)

    return {
        type: 'GET_ANSWERS',
        payload: res
    }
}

export const submitAnswer = (user, question, content) => {
    const res = answers.create({user, question, content})

    return {
        type: 'CREATE_ANSWER',
        payload: res
    }
}

export const getUserQuestions = (skip, take, id) => {
    const res = questions.getUserQuestions(skip, take, id)

    return {
        type: 'GET_QUESTIONS',
        payload: res
    }
}
