import React, { Component } from 'react';
import { Form, Button, Modal } from 'semantic-ui-react';

class NoteForm extends Component {
  state = {
    title: '',
    description: '',
    priority: 'high',
    open: false
  };

  handleChange = (event, { name, value }) => this.setState({ [name]: value });

  handleSubmit = event => {
    event.preventDefault();

    const { title, description, priority } = this.state;

    console.log('title', title);
    console.log('description', description);
    console.log('priority', priority);
  };

  onModalOpen = () => {
    this.setState({ open: true });
  };

  onModalClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { title, description, priority } = this.state;

    return (
      <div>
        <Button onClick={this.onModalOpen}>Create</Button>

        <Modal size={'mini'} open={this.state.open} onClose={this.onModalClose}>
          <Modal.Header>Add new note</Modal.Header>
          <Modal.Content>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input
                label='Title'
                placeholder='Title'
                name='title'
                value={title}
                onChange={this.handleChange}
              />
              <Form.TextArea
                label='Description'
                placeholder='Description'
                name='description'
                value={description}
                onChange={this.handleChange}
              />
              <Form.Select
                label='Priority'
                placeholder='Priority'
                name='priority'
                value={priority}
                onChange={this.handleChange}
                options={[
                  { text: 'High', value: 'high' },
                  { text: 'Normal', value: 'normal' },
                  { text: 'Low', value: 'low' }
                ]}
              />
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={this.onModalClose} content='Cancel' />
            <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content='Save'
              onClick={this.handleSubmit}
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default NoteForm;
