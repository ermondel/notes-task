import React from 'react';
import { connect } from 'react-redux';
import ModalForm from './ModalForm';
import ModalInfo from './ModalInfo';

const ModalHost = props => {
  if (props.status === 'CREATE') return <ModalForm header={'Add new note'} />;

  if (props.status === 'NOTE_ADDED')
    return <ModalInfo header={'Note added'} content={'title'} />;

  if (props.status === 'NOTE_UPDATED')
    return <ModalInfo header={'Note updated'} content={'title'} />;

  if (props.status === 'NOTE_REMOVED')
    return <ModalInfo header={'Note removed'} content={'title'} />;

  return null;
};

const mapStateToProps = state => ({
  status: state.notes.status
});

export default connect(mapStateToProps)(ModalHost);
