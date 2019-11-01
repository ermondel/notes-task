import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {
  setTitleFilter,
  sortByStatusAll,
  sortByStatusOpen,
  sortByStatusDone,
  sortByPriorityAll,
  sortByPriorityHigh,
  sortByPriorityNormal,
  sortByPriorityLow
} from '../actions/filters';

class Filters extends Component {
  handleTitleChange = (event, { value }) => {
    this.props.setTitleFilter(value);
  };

  handleStatusChange = (event, { value }) => {
    switch (value) {
      case 'open':
        return this.props.sortByStatusOpen();
      case 'done':
        return this.props.sortByStatusDone();
      default:
        return this.props.sortByStatusAll();
    }
  };

  handlePriorityChange = (event, { value }) => {
    switch (value) {
      case 'high':
        return this.props.sortByPriorityHigh();
      case 'normal':
        return this.props.sortByPriorityNormal();
      case 'low':
        return this.props.sortByPriorityLow();
      default:
        return this.props.sortByPriorityAll();
    }
  };

  render() {
    return (
      <Form className='Filters'>
        <Form.Group>
          <Form.Input
            placeholder={'Search by title'}
            name='title'
            value={this.props.filters.title}
            onChange={this.handleTitleChange}
            icon='search'
            iconPosition='left'
            width={7}
            className='Filter'
          />
          <Form.Select
            name='status'
            value={this.props.filters.status}
            onChange={this.handleStatusChange}
            options={[
              { text: 'All', value: 'all' },
              { text: 'Open', value: 'open' },
              { text: 'Done', value: 'done' }
            ]}
            className='Filter'
          />
          <Form.Select
            name='priority'
            value={this.props.filters.priority}
            onChange={this.handlePriorityChange}
            options={[
              { text: 'All', value: 'all' },
              { text: 'High', value: 'high' },
              { text: 'Normal', value: 'normal' },
              { text: 'Low', value: 'low' }
            ]}
            className='Filter'
          />
        </Form.Group>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  setTitleFilter: title => dispatch(setTitleFilter(title)),
  sortByStatusAll: () => dispatch(sortByStatusAll()),
  sortByStatusOpen: () => dispatch(sortByStatusOpen()),
  sortByStatusDone: () => dispatch(sortByStatusDone()),
  sortByPriorityAll: () => dispatch(sortByPriorityAll()),
  sortByPriorityHigh: () => dispatch(sortByPriorityHigh()),
  sortByPriorityNormal: () => dispatch(sortByPriorityNormal()),
  sortByPriorityLow: () => dispatch(sortByPriorityLow())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
