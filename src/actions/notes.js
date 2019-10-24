import uuid from 'uuid';

// ADD_NOTE
export const addNote = (fields = {}) => {
  const {
    id = uuid(),
    title,
    description = '',
    priority = 'normal',
    status = 0
  } = fields;

  return {
    type: 'ADD_NOTE',
    note: { id, title, description, priority, status }
  };
};

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
