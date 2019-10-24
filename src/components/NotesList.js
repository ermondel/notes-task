import React from 'react';
import { connect } from 'react-redux';
import NoteListItem from './NoteListItem';
import { Container, Card } from 'semantic-ui-react';

const NotesList = props => (
  <div>
    <Container>
      <Card.Group>
        {props.notes.length ? (
          props.notes.map(note => {
            return <NoteListItem key={note.id} {...note} />;
          })
        ) : (
          <p>No notes</p>
        )}
      </Card.Group>
    </Container>
  </div>
);

const mapStateToProps = state => ({
  notes: state.notes
});

export default connect(mapStateToProps)(NotesList);
