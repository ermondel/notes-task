import React from 'react';
import { Modal, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { actionCloseNote } from '../actions/notes';

const ModalInfo = ({ header, content, modalClose }) => (
  <Modal size="mini" open>
    <Modal.Header
      style={{ backgroundColor: 'green', color: 'white' }}
    >
      <Icon color="green" name="check" />
      {header}
    </Modal.Header>
    <Modal.Content>{content}</Modal.Content>
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
)(ModalInfo);
