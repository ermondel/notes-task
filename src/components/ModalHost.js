import React from 'react';
import { connect } from 'react-redux';
import ModalForm from './ModalForm';
import ModalView from './ModalView';
import {
  actionCloseNote,
  actionAddNote,
  actionUpdateNote,
} from '../actions/notes';

const ModalHost = ({
  note,
  status,
  modalClose,
  addNote,
  updateNote,
}) => {
  if (status === 'CREATE_NOTE') {
    return (
      <ModalForm
        header="Add new note"
        modalClose={modalClose}
        saveNote={(newNote) => addNote(newNote)}
      />
    );
  }

  if (status === 'EDIT_NOTE') {
    return (
      <ModalForm
        header="Edit note"
        note={note}
        modalClose={modalClose}
        saveNote={(updatedNote) => {
          updateNote(note.id, updatedNote);
        }}
      />
    );
  }

  if (status === 'VIEW_NOTE') {
    return <ModalView note={note} modalClose={modalClose} />;
  }

  return null;
};

const mapStateToProps = (state) => ({
  status: state.notes.status,
  note: state.notes.note,
});

const mapDispatchToProps = (dispatch) => ({
  modalClose: () => dispatch(actionCloseNote()),
  addNote: (note) => dispatch(actionAddNote(note)),
  updateNote: (id, note) => dispatch(actionUpdateNote(id, note)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalHost);
