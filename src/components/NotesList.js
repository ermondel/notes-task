import React from 'react';
import { connect } from 'react-redux';
import NoteListItem from './NoteListItem';

const NotesList = props => (
  <div className='NotesList'>
    {props.notes.length ? (
      props.notes.map(note => {
        return <NoteListItem key={note.id} {...note} />;
      })
    ) : (
      <p>No notes</p>
    )}
  </div>
);

const mapStateToProps = state => ({
  notes: state.notes
});

export default connect(mapStateToProps)(NotesList);
