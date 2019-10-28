import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store/configureStore';
import 'semantic-ui-css/semantic.min.css';
import './style/index.css';

// import { addNote } from './actions/notes';
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

// render app
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
