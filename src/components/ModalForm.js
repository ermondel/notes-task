import React, { Component } from 'react';
import { Modal, Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { closeNote, addNote } from '../actions/notes';

class ModalForm extends Component {
  state = {
    title: '',
    description: '',
    priority: 'normal',
    getFromProps: true
  };

  static getDerivedStateFromProps(props, state) {
    if (state.getFromProps && props.note)
      return { ...state, ...props.note, getFromProps: false };
    return null;
  }

  handleChange = (event, { name, value }) => this.setState({ [name]: value });

  handleSubmit = event => {
    event.preventDefault();

    const { title, description, priority } = this.state;

    this.props.addNote({ title, description, priority });

    this.setState({
      title: '',
      description: '',
      priority: 'normal',
      getFromProps: true
    });
  };

  render() {
    const { title, description, priority } = this.state;

    return (
      <Modal size={'mini'} open={true}>
        <Modal.Header>{this.props.header}</Modal.Header>
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
          <Button negative onClick={this.props.modalClose} content='Cancel' />
          <Button
            positive
            icon='checkmark'
            labelPosition='right'
            content='Save'
            onClick={this.handleSubmit}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  modalClose: () => dispatch(closeNote()),
  addNote: note => dispatch(addNote(note))
});

export default connect(
  undefined,
  mapDispatchToProps
)(ModalForm);
