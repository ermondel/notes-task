import React from 'react';
import { Modal, Button } from 'semantic-ui-react';

const ModalAdd = props => (
  <Modal size={'mini'} open={props.open}>
    <Modal.Header>Add new note</Modal.Header>
    <Modal.Content>Content</Modal.Content>
    <Modal.Actions>
      <Button negative onClick={props.modalClose} content='Cancel' />
      <Button
        positive
        icon='checkmark'
        labelPosition='right'
        content='Save'
        onClick={props.modalClose}
      />
    </Modal.Actions>
  </Modal>
);

export default ModalAdd;
