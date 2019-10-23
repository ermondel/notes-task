import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store/configureStore';
import { addNote, editNote, removeNote } from './actions/notes';

// redux store
const store = configureStore();

// redux store test
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addNote({ id: 1, title: 'my title 1' }));
store.dispatch(editNote(1, { title: 'loremipsum' }));
store.dispatch(editNote(1, { description: 'some description' }));
store.dispatch(editNote(1, { priority: 1, status: 1 }));
store.dispatch(removeNote(1));

// render app
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
