import React from 'react';
import { Modal, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { actionCloseNote } from '../actions/notes';

const ModalView = ({ note, modalClose }) => (
  <Modal size="mini" open>
    <Modal.Header
      style={
        note.status
          ? {}
          : { backgroundColor: 'grey', color: 'white' }
      }
    >
      {note.title}
    </Modal.Header>
    <Modal.Content>{note.description}</Modal.Content>
    <Modal.Actions>
      <Button onClick={modalClose}>Close</Button>
    </Modal.Actions>
  </Modal>
);

const mapDispatchToProps = (dispatch) => ({
  modalClose: () => dispatch(actionCloseNote()),
});

export default connect(
  undefined,
  mapDispatchToProps,
)(ModalView);
