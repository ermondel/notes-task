import React from 'react';
import { Modal, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { closeNote } from '../actions/notes';

const ModalInfo = props => (
  <Modal size={'mini'} open={true}>
    <Modal.Header>{props.header}</Modal.Header>
    <Modal.Actions>
      <Button onClick={props.modalClose}>Close</Button>
    </Modal.Actions>
  </Modal>
);

const mapDispatchToProps = dispatch => ({
  modalClose: () => dispatch(closeNote())
});

export default connect(
  undefined,
  mapDispatchToProps
)(ModalInfo);
