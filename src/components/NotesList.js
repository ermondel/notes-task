import React from 'react';
import { connect } from 'react-redux';
import NoteListItem from './NoteListItem';
import { Container, Card } from 'semantic-ui-react';
import selectNotes from '../selectors/notes';
import Filters from './Filters';

const NotesList = props =>
  props.notes.length ? (
    <div className='NotesList'>
      <Container>
        <Filters />
        <Card.Group>
          {props.notes.map(note => (
            <NoteListItem key={note.id} {...note} />
          ))}
        </Card.Group>
      </Container>
    </div>
  ) : null;

const mapStateToProps = state => ({
  notes: selectNotes(state.notes, state.filters)
});

export default connect(mapStateToProps)(NotesList);
