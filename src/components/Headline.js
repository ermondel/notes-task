import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Button,
  Icon,
} from 'semantic-ui-react';
import { actionCreateNote } from '../actions/notes';

const Headline = ({ createNote }) => (
  <Container>
    <Header as="h1" floated="left">
      TODOList
    </Header>
    <Button
      icon
      labelPosition="right"
      color="blue"
      onClick={createNote}
    >
      Add note
      <Icon name="add" />
    </Button>
  </Container>
);

const mapDispatchToProps = (dispatch) => ({
  createNote: () => dispatch(actionCreateNote()),
});

export default connect(
  undefined,
  mapDispatchToProps,
)(Headline);
