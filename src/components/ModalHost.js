import React from 'react';
import { connect } from 'react-redux';
import ModalForm from './ModalForm';
import ModalInfo from './ModalInfo';

const ModalHost = props => {
  if (props.status === 'CREATE') return <ModalForm header={'Add new note'} />;

  if (props.status === 'NOTE_ADDED')
    return <ModalInfo header={'Note added'} content={props.note.title} />;

  if (props.status === 'NOTE_UPDATED')
    return <ModalInfo header={'Note updated'} content={props.note.title} />;

  if (props.status === 'NOTE_REMOVED')
    return <ModalInfo header={'Note removed'} content={props.note.title} />;

  return null;
};

const mapStateToProps = state => ({
  status: state.notes.status,
  note: state.notes.list.find(({ id }) => id === state.notes.lastID)
});

export default connect(mapStateToProps)(ModalHost);
