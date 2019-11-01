import uuid from 'uuid';

export const addNote = (fields = {}) => {
  const {
    id = uuid(),
    title,
    description = '',
    priority = 'normal',
    status = true,
    date = Date.now()
  } = fields;

  return {
    type: 'ADD_NOTE',
    note: { id, title, description, priority, status, date }
  };
};

export const updateNote = (id, updates) => ({
  type: 'UPDATE_NOTE',
  id,
  updates
});

export const switchNoteStatus = id => ({
  type: 'SWITCH_NOTE_STATUS',
  id
});

export const removeNote = id => ({
  type: 'REMOVE_NOTE',
  id
});

export const createNote = () => ({
  type: 'CREATE_NOTE'
});

export const editNote = id => ({
  type: 'EDIT_NOTE',
  id
});

export const closeNote = () => ({
  type: 'CLOSE_NOTE'
});

export const viewNote = id => ({
  type: 'VIEW_NOTE',
  id
});
