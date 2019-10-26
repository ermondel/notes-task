import React from 'react';
import Headline from './Headline';
import NoteList from './NotesList';
import ModalHost from './ModalHost';
import { Divider } from 'semantic-ui-react';

const App = () => (
  <div className='App' style={{ marginTop: '10px' }}>
    <Headline />
    <Divider />
    <NoteList />
    <ModalHost />
  </div>
);

export default App;
