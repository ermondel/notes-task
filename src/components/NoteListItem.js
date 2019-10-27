import React from 'react';
import { Card, Dropdown, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { editNote } from '../actions/notes';

const icons = {
  high: { icon: 'alarm', color: 'red' },
  normal: { icon: 'bookmark outline', color: 'blue' },
  low: { icon: 'bookmark outline', color: undefined }
};

const NoteListItem = props => (
  <Card>
    <Card.Content header={props.title} style={{ flexGrow: 0 }} />
    <Card.Content description={props.description} />
    <Card.Content extra>
      <Dropdown icon='ellipsis horizontal' direction='left' title='Menu'>
        <Dropdown.Menu>
          <Dropdown.Item
            icon='check'
            text='Mark as done'
            onClick={() => console.log('check', props.id)}
          />
          <Dropdown.Item
            icon='edit'
            text='Edit note'
            onClick={() => props.editNote(props.id)}
          />
          <Dropdown.Item
            icon='trash'
            text='Remove note'
            onClick={() => console.log('trash', props.id)}
          />
        </Dropdown.Menu>
      </Dropdown>
      <div>
        <Icon
          color={icons[props.priority].color}
          name={icons[props.priority].icon}
          title={props.priority + ' priority'}
        />
      </div>
    </Card.Content>
  </Card>
);

const mapDispatchToProps = dispatch => ({
  editNote: id => dispatch(editNote(id))
});

export default connect(
  undefined,
  mapDispatchToProps
)(NoteListItem);
