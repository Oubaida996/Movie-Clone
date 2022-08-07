import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';

import { rootReducer } from '../reducer/rootReducer';

//1-create store 
export const store = createStore(rootReducer, applyMiddleware(thunk));