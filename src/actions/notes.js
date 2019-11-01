import uuid from 'uuid';

export const actionAddNote = (fields = {}) => {
  const {
    id = uuid(),
    title,
    description = '',
    priority = 'normal',
    status = true,
    date = Date.now(),
  } = fields;

  return {
    type: 'ADD_NOTE',
    note: {
      id,
      title,
      description,
      priority,
      status,
      date,
    },
  };
};

export const actionUpdateNote = (id, updates) => ({
  type: 'UPDATE_NOTE',
  id,
  updates,
});

export const actionSwitchNoteStatus = (id) => ({
  type: 'SWITCH_NOTE_STATUS',
  id,
});

export const actionRemoveNote = (id) => ({
  type: 'REMOVE_NOTE',
  id,
});

export const actionCreateNote = () => ({
  type: 'CREATE_NOTE',
});

export const actionEditNote = (id) => ({
  type: 'EDIT_NOTE',
  id,
});

export const actionCloseNote = () => ({
  type: 'CLOSE_NOTE',
});

export const actionViewNote = (id) => ({
  type: 'VIEW_NOTE',
  id,
});
