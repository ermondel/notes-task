import uuid from 'uuid';

// ADD_NOTE
export const addNote = ({ id = uuid(), title = '' } = {}) => ({
  type: 'ADD_NOTE',
  note: {
    id,
    title
  }
});

// EDIT_NOTE
export const editNote = (id, updates) => ({
  type: 'EDIT_NOTE',
  id,
  updates
});

// REMOVE_NOTE
export const removeNote = id => ({
  type: 'REMOVE_NOTE',
  id
});
