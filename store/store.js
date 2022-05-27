// libs
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
// reducers
import rootReducer from './reducers';

const middleware = [thunk];
const initialState = {};
export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

const makeStore = () => store;
export const wrapper = createWrapper(makeStore, { debug: true });
