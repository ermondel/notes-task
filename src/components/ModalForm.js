import React, { Component } from 'react';
import { Modal, Button, Form } from 'semantic-ui-react';

class ModalForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      priority: 'normal',
      getFromProps: true,
      titleError: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (state.getFromProps && props.note) {
      return { ...state, ...props.note, getFromProps: false };
    }
    return null;
  }

  handleChange = (event, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleFocus = () => {
    const { titleError } = this.state;

    if (titleError) {
      this.setState({
        titleError: false,
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { title, description, priority } = this.state;

    if (title.trim().length <= 0) {
      this.setState({ titleError: true });
    } else {
      const { saveNote } = this.props;

      saveNote({ title, description, priority });

      this.setState({
        title: '',
        description: '',
        priority: 'normal',
        getFromProps: true,
        titleError: false,
      });
    }
  };

  render() {
    const {
      title,
      description,
      priority,
      titleError,
    } = this.state;

    const { header, modalClose } = this.props;

    return (
      <Modal size="mini" open>
        <Modal.Header>{header}</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Input
              label="Title"
              placeholder={
                titleError ? 'Please enter title' : 'Title'
              }
              name="title"
              value={title}
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              error={titleError}
            />
            <Form.TextArea
              label="Description"
              placeholder="Description"
              name="description"
              value={description}
              onChange={this.handleChange}
            />
            <Form.Select
              label="Priority"
              placeholder="Priority"
              name="priority"
              value={priority}
              onChange={this.handleChange}
              options={[
                { text: 'High', value: 'high' },
                { text: 'Normal', value: 'normal' },
                { text: 'Low', value: 'low' },
              ]}
            />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button
            negative
            onClick={modalClose}
            content="Cancel"
          />
          <Button
            positive
            icon="checkmark"
            labelPosition="right"
            content="Save"
            onClick={this.handleSubmit}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ModalForm;
