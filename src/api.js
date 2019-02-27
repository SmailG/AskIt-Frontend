const BASE_URL = "http://localhost:3333/api/v1";

const formatBody = (method, body) => {
	if (method === 'get') return {};
	else {
		return { body: JSON.stringify(body) }
	}
};

const request = async (method, url, body) => fetch(url, {
	method: method,
	headers:
	{
		"Authorization": "Bearer " + await localStorage.getItem("token"),
		"Content-Type": "application/json"
	},
	...formatBody(method, body)
}).then(async (res) => {
	if (res.ok) {
		return res.json();
	}
	else {
		console.log(res.status);
		throw { code: res.status, message: (await res.json()) };
	}
});

const get = (url, body = {}) => request('get', url, body);
const post = (url, body = {}) => request('post', url, body);
const put = (url, body = {}) => request('put', url, body);
const del = (url, body = {}) => request('delete', url, body);

const crud = (path) => ({
	create: (data) => post(`${BASE_URL}${path}`, data),
	update: (id, data) => put(`${BASE_URL}${path}/${id}`, data),
	delete: (id) => del(`${BASE_URL}${path}/${id}`),
	list: () => get(`${BASE_URL}${path}`),
});

export const auth = {
	login: (data) => post(`${BASE_URL}/auth/login`, data),
	register: (data) => post(`${BASE_URL}/auth/register`, data) 
}

export const questions = {
	...crud("/question"),
	getSingle: (id) => get(`${BASE_URL}/question?id=${id}`),
	getMultiple: (skip, take, criteria) => get(`${BASE_URL}/question/getQuestions?offset=${skip}&take=${take}&criteria=${criteria}`),
	getUserQuestions: (skip, take, id) => get(`${BASE_URL}/question/getUserQuestions?skip=${skip}&take=${take}&id=${id}`),
	vote: (data) => put(`${BASE_URL}/question/vote`, data) 
}

export const answers = {
	...crud("/answer"),
	getAnswers: (id) => get(`${BASE_URL}/answer/getAnswers?id=${id}`),
	vote: (data) => put(`${BASE_URL}/answer/vote`, data) 
}

export const user = {
	...crud("/user"),
	changePassword: (data) => post(`${BASE_URL}/user/reset-password`, data) 
}

