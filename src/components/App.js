import React from 'react';
import { createStore } from 'redux';

const incCount = ({ val = 1 } = {}) => ({
  type: 'INC',
  val
});

const decCount = ({ val = 1 } = {}) => ({
  type: 'DEC',
  val
});

const setCount = ({ val }) => ({
  type: 'SET',
  val
});

const resetCount = () => ({
  type: 'RESET'
});

const notesReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INC':
      return {
        count: state.count + action.val
      };

    case 'DEC':
      return {
        count: state.count - action.val
      };

    case 'SET':
      return {
        count: action.val
      };

    case 'RESET':
      return {
        count: 0
      };

    default:
      return state;
  }
};

const store = createStore(notesReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incCount());
store.dispatch(incCount({ val: 10 }));
store.dispatch(incCount({ val: 100 }));
store.dispatch(decCount());
store.dispatch(decCount({ val: 100 }));
store.dispatch(setCount({ val: -678 }));
store.dispatch(resetCount());

const App = () => <div className='App'>App</div>;

export default App;
