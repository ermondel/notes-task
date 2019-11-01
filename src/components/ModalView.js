import React from 'react';
import { Modal, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { closeNote } from '../actions/notes';

const ModalView = props => (
  <Modal size={'mini'} open={true}>
    <Modal.Header
      style={
        props.note.status ? {} : { backgroundColor: 'grey', color: 'white' }
      }
    >
      {props.note.title}
    </Modal.Header>
    <Modal.Content>{props.note.description}</Modal.Content>
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
)(ModalView);
