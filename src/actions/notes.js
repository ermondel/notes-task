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

export const updateNote = (id, updates) => ({
  type: 'UPDATE_NOTE',
  id,
  updates,
  status: 'NOTE_UPDATED'
});

export const editNote = id => ({
  type: 'EDIT_NOTE',
  id,
  status: 'EDIT'
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
