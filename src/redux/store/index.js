import { createStore } from 'redux';

import { rootReducer } from '../reducer/rootReducer';

//1-create store 
export const store = createStore(rootReducer);