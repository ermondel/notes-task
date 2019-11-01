import React from 'react';
import { connect } from 'react-redux';
import ModalForm from './ModalForm';
import ModalView from './ModalView';
import { closeNote, addNote, updateNote } from '../actions/notes';

const ModalHost = props => {
  if (props.status === 'CREATE_NOTE')
    return (
      <ModalForm
        header={'Add new note'}
        modalClose={props.modalClose}
        saveNote={note => props.addNote(note)}
      />
    );

  if (props.status === 'EDIT_NOTE')
    return (
      <ModalForm
        header={'Edit note'}
        note={props.note}
        modalClose={props.modalClose}
        saveNote={note => props.updateNote(props.note.id, note)}
      />
    );

  if (props.status === 'VIEW_NOTE')
    return <ModalView note={props.note} modalClose={props.modalClose} />;

  return null;
};

const mapStateToProps = state => ({
  status: state.notes.status,
  note: state.notes.note
});

const mapDispatchToProps = dispatch => ({
  modalClose: () => dispatch(closeNote()),
  addNote: note => dispatch(addNote(note)),
  updateNote: (id, note) => dispatch(updateNote(id, note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalHost);
