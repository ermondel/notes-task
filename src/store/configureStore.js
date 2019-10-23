import { createStore, combineReducers } from 'redux';
import notesReducer from '../reducers/notes';

export default () => {
  return createStore(
    combineReducers({
      notes: notesReducer
    })
  );
};
