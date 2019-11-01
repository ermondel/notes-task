import React from 'react';
import { connect } from 'react-redux';
import { Container, Card } from 'semantic-ui-react';
import NoteListItem from './NoteListItem';
import NotesFilters from './NotesFilters';
import selectNotes from '../selectors/notes';

const NotesList = ({ showFilters, notes }) => (
  <div className="NotesList">
    <Container>
      {showFilters && <NotesFilters />}
      {notes.length ? (
        <Card.Group>
          {notes.map((note) => (
            <NoteListItem key={note.id} note={note} />
          ))}
        </Card.Group>
      ) : null}
    </Container>
  </div>
);
const mapStateToProps = (state) => ({
  notes: selectNotes(state.notes, state.filters),
  showFilters: state.notes.list.length > 0,
});

export default connect(mapStateToProps)(NotesList);
