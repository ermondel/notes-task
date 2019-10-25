import uuid from 'uuid';

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
    note: { id, title, description, priority, status },
    status: 'NOTE_ADDED'
  };
};

export const editNote = (id, updates) => ({
  type: 'EDIT_NOTE',
  id,
  updates,
  status: 'NOTE_UPDATED'
});

export const removeNote = id => ({
  type: 'REMOVE_NOTE',
  id,
  status: 'NOTE_REMOVED'
});

export const createNote = () => ({
  type: 'CREATE_NOTE',
  status: 'CREATE'
});

export const closeNote = () => ({
  type: 'CLOSE_NOTE',
  status: 'CLOSED'
});
