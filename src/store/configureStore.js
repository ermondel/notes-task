import { createStore, combineReducers } from 'redux';
import notesReducer from '../reducers/notes';
import filtersReducer from '../reducers/filters';

export default () => createStore(combineReducers({
  notes: notesReducer,
  filters: filtersReducer,
}));
