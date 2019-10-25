import React from 'react';
import { Modal, Button } from 'semantic-ui-react';

const ModalInfo = props => (
  <Modal size={'mini'} open={props.open}>
    <Modal.Header>{props.header}</Modal.Header>
    <Modal.Content>{props.content}</Modal.Content>
    <Modal.Actions>
      <Button onClick={props.modalClose}>Close</Button>
    </Modal.Actions>
  </Modal>
);

export default ModalInfo;
