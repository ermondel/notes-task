import React from 'react';

const NoteListItem = props => (
  <div className='NoteListItem'>
    <ul>
      <li>id: {props.id}</li>
      <li>title: {props.title}</li>
      <li>description: {props.description}</li>
      <li>priority: {props.priority}</li>
      <li>status: {props.status}</li>
    </ul>
  </div>
);

export default NoteListItem;
