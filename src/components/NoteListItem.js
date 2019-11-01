import React from 'react';
import { Card, Dropdown, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {
  actionEditNote,
  actionRemoveNote,
  actionSwitchNoteStatus,
  actionViewNote,
} from '../actions/notes';
import shorten from '../utils/util';

const icons = {
  high: { icon: 'alarm', color: 'red' },
  normal: { icon: 'bookmark outline', color: 'blue' },
  low: { icon: 'circle outline', color: undefined },
};

const NoteListItem = ({
  note,
  viewNote,
  switchNoteStatus,
  editNote,
  removeNote,
}) => (
  <Card className={note.status ? 'noteOpen' : 'noteDone'}>
    <Card.Content
      header={shorten(note.title, 30)}
      style={{ flexGrow: 0 }}
      onClick={() => viewNote(note.id)}
      className="clickableCard"
    />
    <Card.Content
      description={shorten(note.description, 255)}
      onClick={() => viewNote(note.id)}
      className="clickableCard"
    />
    <Card.Content extra>
      <Dropdown
        icon="ellipsis horizontal"
        direction="left"
        title="Menu"
        style={{ float: 'right' }}
      >
        <Dropdown.Menu>
          <Dropdown.Item
            icon={note.status ? 'check' : 'unhide'}
            text={`Mark as ${note.status ? 'done' : 'open'}`}
            onClick={() => switchNoteStatus(note.id)}
          />
          <Dropdown.Item
            icon="edit"
            text="Edit note"
            onClick={() => editNote(note.id)}
          />
          <Dropdown.Item
            icon="trash"
            text="Remove note"
            onClick={() => removeNote(note.id)}
          />
        </Dropdown.Menu>
      </Dropdown>
      <div>
        <Icon
          color={icons[note.priority].color}
          name={icons[note.priority].icon}
          title={`${note.priority} priority`}
        />
      </div>
    </Card.Content>
  </Card>
);

const mapDispatchToProps = (dispatch) => ({
  editNote: (id) => dispatch(actionEditNote(id)),
  removeNote: (id) => dispatch(actionRemoveNote(id)),
  switchNoteStatus: (id) => dispatch(actionSwitchNoteStatus(id)),
  viewNote: (id) => dispatch(actionViewNote(id)),
});

export default connect(
  undefined,
  mapDispatchToProps,
)(NoteListItem);
