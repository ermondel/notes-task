import React from 'react';
import { connect } from 'react-redux';
import { Container, Header, Button, Icon } from 'semantic-ui-react';
import { createNote } from '../actions/notes';

const Headline = props => (
  <Container style={{ paddingTop: '10px' }}>
    <Header as='h1' floated='left'>
      TODOList
    </Header>
    <Button icon labelPosition='right' color='blue' onClick={props.createNote}>
      Add note
      <Icon name='add' />
    </Button>
  </Container>
);

const mapDispatchToProps = dispatch => ({
  createNote: () => dispatch(createNote())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Headline);
