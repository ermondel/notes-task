import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {
  actionSetTitleFilter,
  actionSortByStatusAll,
  actionSortByStatusOpen,
  actionSortByStatusDone,
  actionSortByPriorityAll,
  actionSortByPriorityHigh,
  actionSortByPriorityNormal,
  actionSortByPriorityLow,
} from '../actions/filters';

class NotesFilters extends Component {
  handleTitleChange = (event, { value }) => {
    const { setTitleFilter } = this.props;

    setTitleFilter(value);
  };

  handleStatusChange = (event, { value }) => {
    const {
      sortByStatusOpen,
      sortByStatusDone,
      sortByStatusAll,
    } = this.props;

    switch (value) {
      case 'open':
        return sortByStatusOpen();
      case 'done':
        return sortByStatusDone();
      default:
        return sortByStatusAll();
    }
  };

  handlePriorityChange = (event, { value }) => {
    const {
      sortByPriorityHigh,
      sortByPriorityNormal,
      sortByPriorityLow,
      sortByPriorityAll,
    } = this.props;

    switch (value) {
      case 'high':
        return sortByPriorityHigh();
      case 'normal':
        return sortByPriorityNormal();
      case 'low':
        return sortByPriorityLow();
      default:
        return sortByPriorityAll();
    }
  };

  render() {
    const { filters } = this.props;

    return (
      <Form className="Filters">
        <Form.Group>
          <Form.Input
            placeholder="Search by title"
            name="title"
            value={filters.title}
            onChange={this.handleTitleChange}
            icon="search"
            iconPosition="left"
            width={7}
            className="Filter"
          />
          <Form.Select
            name="status"
            value={filters.status}
            onChange={this.handleStatusChange}
            options={[
              { text: 'All', value: 'all' },
              { text: 'Open', value: 'open' },
              { text: 'Done', value: 'done' },
            ]}
            className="Filter"
          />
          <Form.Select
            name="priority"
            value={filters.priority}
            onChange={this.handlePriorityChange}
            options={[
              { text: 'All', value: 'all' },
              { text: 'High', value: 'high' },
              { text: 'Normal', value: 'normal' },
              { text: 'Low', value: 'low' },
            ]}
            className="Filter"
          />
        </Form.Group>
      </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  setTitleFilter: (title) => {
    dispatch(actionSetTitleFilter(title));
  },
  sortByStatusAll: () => {
    dispatch(actionSortByStatusAll());
  },
  sortByStatusOpen: () => {
    dispatch(actionSortByStatusOpen());
  },
  sortByStatusDone: () => {
    dispatch(actionSortByStatusDone());
  },
  sortByPriorityAll: () => {
    dispatch(actionSortByPriorityAll());
  },
  sortByPriorityHigh: () => {
    dispatch(actionSortByPriorityHigh());
  },
  sortByPriorityNormal: () => {
    dispatch(actionSortByPriorityNormal());
  },
  sortByPriorityLow: () => {
    dispatch(actionSortByPriorityLow());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotesFilters);
