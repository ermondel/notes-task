import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalAdd from './ModalAdd';
import ModalInfo from './ModalInfo';
import { closeNote } from '../actions/notes';

class Modal extends Component {
  modalClose = () => {
    this.props.closeNote();
  };

  render() {
    switch (this.props.status) {
      case 'CREATE':
        return <ModalAdd open={true} modalClose={this.modalClose} />;

      case 'CLOSED':
        return <ModalAdd open={false} modalClose={this.modalClose} />;

      case 'NOTE_ADDED':
        return (
          <ModalInfo
            open={true}
            modalClose={this.modalClose}
            header={'Note added'}
            content={'title'}
          />
        );

      case 'NOTE_UPDATED':
        return (
          <ModalInfo
            open={true}
            modalClose={this.modalClose}
            header={'Note updated'}
            content={'title'}
          />
        );

      case 'NOTE_REMOVED':
        return (
          <ModalInfo
            open={true}
            modalClose={this.modalClose}
            header={'Note removed'}
            content={'title'}
          />
        );

      default:
        return null;
    }
  }
}

const mapStateToProps = state => ({
  status: state.notes.status
});

const mapDispatchToProps = dispatch => ({
  closeNote: () => dispatch(closeNote())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
