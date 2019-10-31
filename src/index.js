import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store/configureStore';
import 'semantic-ui-css/semantic.min.css';
import './style/index.css';

// actions and fixtures
// import { addNote } from './actions/notes';
// import notes from './tests/fixtures/notes';
// import {
//   setTitleFilter,
//   sortByStatusAll,
//   sortByStatusOpen,
//   sortByStatusDone,
//   sortByPriorityAll,
//   sortByPriorityHigh,
//   sortByPriorityNormal,
//   sortByPriorityLow
// } from './actions/filters';

// redux store
const store = configureStore();

// store.subscribe(() => {
//   console.log(store.getState());
// });

// redux store test
// notes.forEach(note => {
//   store.dispatch(addNote(note));
// });
// store.dispatch(setTitleFilter('Title'));
// store.dispatch(sortByStatusAll());
// store.dispatch(sortByStatusOpen());
// store.dispatch(sortByStatusDone());
// store.dispatch(sortByPriorityAll());
// store.dispatch(sortByPriorityHigh());
// store.dispatch(sortByPriorityNormal());
// store.dispatch(sortByPriorityLow());

// render app
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
