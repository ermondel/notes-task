import React from 'react';
import Headline from './Headline';
import NoteList from './NotesList';
import Modal from './Modal';
import { Divider } from 'semantic-ui-react';

const App = () => (
  <div className='App' style={{ marginTop: '10px' }}>
    <Headline />
    <Divider />
    <NoteList />
    <Modal />
  </div>
);

export default App;
