import React from 'react';
import { Modal, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { closeNote } from '../actions/notes';

const ModalInfo = props => (
  <Modal size={'mini'} open={true}>
    <Modal.Header style={{ backgroundColor: 'green', color: 'white' }}>
      <Icon color='green' name='check' />
      {props.header}
    </Modal.Header>
    <Modal.Content>{props.content}</Modal.Content>
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
