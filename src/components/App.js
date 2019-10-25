import React from 'react';
import Headline from './Headline';
import NoteList from './NotesList';
import { Divider } from 'semantic-ui-react';

const App = () => (
  <div className='App' style={{ marginTop: '10px' }}>
    <Headline />
    <Divider />
    <NoteList />
  </div>
);

export default App;
