import React from 'react';
import { Divider } from 'semantic-ui-react';
import Headline from './Headline';
import NoteList from './NotesList';
import ModalHost from './ModalHost';
import Footer from './Footer';

const App = () => (
  <div className="App">
    <Headline />
    <Divider />
    <NoteList />
    <Divider />
    <Footer />
    <ModalHost />
  </div>
);

export default App;
