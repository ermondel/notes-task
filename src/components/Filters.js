import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class Filters extends Component {
  state = {
    title: '',
    status: 'all',
    priority: 'all'
  };

  handleChange = (event, { name, value }) => this.setState({ [name]: value });

  render() {
    const { title, status, priority } = this.state;

    return (
      <Form style={{ marginBottom: '50px' }}>
        <Form.Group widths='equal'>
          <Form.Input
            fluid
            placeholder={'Title'}
            name='title'
            value={title}
            onChange={this.handleChange}
          />
          <Form.Select
            fluid
            name='status'
            value={status}
            onChange={this.handleChange}
            options={[
              { text: 'All', value: 'all' },
              { text: 'Open', value: 'open' },
              { text: 'Done', value: 'done' }
            ]}
          />
          <Form.Select
            fluid
            name='priority'
            value={priority}
            onChange={this.handleChange}
            options={[
              { text: 'All', value: 'all' },
              { text: 'High', value: 'high' },
              { text: 'Normal', value: 'normal' },
              { text: 'Low', value: 'low' }
            ]}
          />
        </Form.Group>
      </Form>
    );
  }
}

export default Filters;
