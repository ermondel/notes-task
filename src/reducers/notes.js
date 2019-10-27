const notesReducerDefaultState = {
  list: [],
  status: 'NONE',
  note: null
};

export default (state = notesReducerDefaultState, action) => {
  //
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        list: [...state.list, action.note],
        status: 'NOTE_ADDED',
        note: action.note
      };

    case 'UPDATE_NOTE':
      const list = state.list.map(note => {
        if (note.id === action.id) {
          action.note = { ...note, ...action.updates };
          return action.note;
        } else {
          return note;
        }
      });

      return {
        list,
        status: 'NOTE_UPDATED',
        note: action.note
      };

    case 'REMOVE_NOTE':
      return {
        list: state.list.filter(({ id }) => id !== action.id),
        status: 'NOTE_REMOVED',
        note: state.list.find(({ id }) => id === action.id)
      };

    case 'CREATE_NOTE':
      return {
        list: state.list,
        status: action.type,
        note: state.note
      };

    case 'EDIT_NOTE':
      return {
        list: state.list,
        status: action.type,
        note: state.list.find(({ id }) => id === action.id)
      };

    case 'CLOSE_NOTE':
      return {
        list: state.list,
        status: action.type,
        note: state.note
      };

    default:
      return state;
  }
};
