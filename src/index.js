import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store/configureStore';
import 'semantic-ui-css/semantic.min.css';

// import {
//   addNote,
//   editNote,
//   removeNote,
//   createNote,
//   closeNote
// } from './actions/notes';
// import notes from './tests/fixtures/notes';

// redux store
const store = configureStore();

// store.subscribe(() => {
//   console.log(store.getState());
// });

// redux store test
// notes.forEach(note => {
//   store.dispatch(addNote(note));
// });
// store.dispatch(addNote(notes[0]));
// store.dispatch(addNote(notes[1]));
// store.dispatch(addNote(notes[2]));
// store.dispatch(addNote(notes[3]));
// store.dispatch(editNote(2, { title: 'new title' }));
// store.dispatch(removeNote(1));
// store.dispatch(createNote());
// store.dispatch(closeNote());

// render app
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
