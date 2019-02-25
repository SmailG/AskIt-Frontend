import {
    questions,
    answers,
    user,
    auth
} from '../api';


export const selectTab = (tab) => ({
    type: 'SELECT_TAB',
    payload: tab
});

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
    const res = questions.getMultiple(id);

    return {
    type: 'GET_SINGLE_QUESTION',
    payload: res
    }
}