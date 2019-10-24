import React, { Component } from 'react';

class NoteForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      priority: 0
    };

    if (props.note) this.state = { ...this.state, ...props.note };
  }

  onTitleChange = event => {
    const title = event.target.value;
    this.setState({ title });
  };

  onDescriptionChange = event => {
    const description = event.target.value;
    this.setState({ description });
  };

  onPriorityChange = event => {
    const priority = event.target.value;
    console.log('onPriorityChange', priority);
    this.setState({ priority });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log('onSubmit');
  };

  onFormFocus = () => {
    console.log('onFormFocus');
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>
            Title
            <input
              type='text'
              placeholder='Title'
              value={this.state.title}
              onChange={this.onTitleChange}
              onFocus={this.onFormFocus}
            />
          </label>
          <label>
            Description
            <input
              type='text'
              placeholder='Description'
              value={this.state.description}
              onChange={this.onDescriptionChange}
              onFocus={this.onFormFocus}
            />
          </label>
          <label>
            Priority
            <select
              value={this.state.priority}
              onChange={this.onPriorityChange}
            >
              <option value='0'>High</option>
              <option value='1'>Normal</option>
              <option value='2'>Low</option>
            </select>
          </label>
        </form>
        <button>Cancel</button>
        <button onClick={this.onSubmit}>Save</button>
      </div>
    );
  }
}

export default NoteForm;
