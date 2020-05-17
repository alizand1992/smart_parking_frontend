import { createStore } from 'redux';
import smartParking from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(smartParking, composeWithDevTools());