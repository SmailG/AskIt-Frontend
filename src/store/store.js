import reducers from "../reducers/index";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import askItMiddleWare from '../middleware/AskItMiddleware';
import { createLogger } from "redux-logger";

const logger = createLogger({
	collapsed: true,
	colors: {
		title: () => "green"
	}
});
// I use thunk to make api calls there, I'd normally use custom middleware but let's keep it simple..
const middleware = applyMiddleware(promiseMiddleware(), thunk, logger, askItMiddleWare);

export default createStore(
	reducers,
	middleware
)