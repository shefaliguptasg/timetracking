import {createStore} from 'redux';
import counter from './Reducer';
export const store = createStore(counter)