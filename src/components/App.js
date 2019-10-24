import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions/notes';
import NoteList from './NotesList';
import NoteForm from './NoteForm';
import { Container, Divider, Header, Button, Icon } from 'semantic-ui-react';

class App extends Component {
  state = {
    open: false,
    note: null
  };

  modalOpen = () => {
    this.setState({ open: true });
  };

  modalClose = () => {
    this.setState({ open: false });
  };

  saveNote = note => {
    this.props.addNote(note);
    this.setState({
      open: false,
      note: null
    });
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
            onClick={this.modalOpen}
            color='blue'
          >
            Add note
            <Icon name='add' />
          </Button>
        </Container>
        <Divider />
        <NoteList />
        <NoteForm
          open={this.state.open}
          modalClose={this.modalClose}
          saveNote={this.saveNote}
          note={this.state.note}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addNote: note => dispatch(addNote(note))
});

export default connect(
  undefined,
  mapDispatchToProps
)(App);
