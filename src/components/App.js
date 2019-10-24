import React, { Component } from 'react';
import NoteList from './NotesList';
import NoteForm from './NoteForm';
import { Container, Divider, Header, Button, Icon } from 'semantic-ui-react';

class App extends Component {
  state = {
    open: false
  };

  onModalOpen = () => {
    this.setState({ open: true });
  };

  onModalClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className='App' style={{ marginTop: '10px' }}>
        <Container>
          <Header as='h1' floated='left'>
            TODOList
          </Header>
          <Button
            icon
            labelPosition='right'
            onClick={this.onModalOpen}
            color='blue'
          >
            Add note
            <Icon name='add' />
          </Button>
        </Container>
        <Divider />
        <NoteList />
        <NoteForm open={this.state.open} onClose={this.onModalClose} />
      </div>
    );
  }
}

export default App;
