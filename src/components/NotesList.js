import React from 'react';
import { connect } from 'react-redux';
import NoteListItem from './NoteListItem';
import { Container, Card } from 'semantic-ui-react';

const NotesList = props =>
  props.notes.length ? (
    <div className='NotesList'>
      <Container>
        <Card.Group>
          {props.notes.reverse().map(note => (
            <NoteListItem key={note.id} {...note} />
          ))}
        </Card.Group>
      </Container>
    </div>
  ) : null;

const mapStateToProps = state => ({
  notes: state.notes.list
});

export default connect(mapStateToProps)(NotesList);
