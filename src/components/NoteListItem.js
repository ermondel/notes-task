import React from 'react';
import { Card } from 'semantic-ui-react';

const NoteListItem = props => (
  <Card>
    <Card.Content header={props.title} style={{ flexGrow: 0 }} />
    <Card.Content description={props.description} />
  </Card>
);

export default NoteListItem;
