const notesReducerDefaultState = {
  list: [],
  status: 'NONE',
  note: null,
};

export default (state = notesReducerDefaultState, action) => {
  //
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        list: [...state.list, action.note],
        status: 'NOTE_ADDED',
        note: action.note,
      };

    case 'UPDATE_NOTE':
      return {
        list: state.list.map((note) => {
          if (note.id === action.id) {
            return { ...note, ...action.updates };
          }
          return note;
        }),
        status: 'NOTE_UPDATED',
        note: state.list.find(({ id }) => id === action.id),
      };

    case 'SWITCH_NOTE_STATUS':
      return {
        list: state.list.map((note) => {
          if (note.id === action.id) {
            return { ...note, status: !note.status };
          }
          return note;
        }),
        status: 'STATUS_SWITCHED',
        note: state.list.find(({ id }) => id === action.id),
      };

    case 'REMOVE_NOTE':
      return {
        list: state.list.filter(({ id }) => id !== action.id),
        status: 'NOTE_REMOVED',
        note: state.list.find(({ id }) => id === action.id),
      };

    case 'CREATE_NOTE':
      return {
        list: state.list,
        status: action.type,
        note: state.note,
      };

    case 'EDIT_NOTE':
      return {
        list: state.list,
        status: action.type,
        note: state.list.find(({ id }) => id === action.id),
      };

    case 'CLOSE_NOTE':
      return {
        list: state.list,
        status: action.type,
        note: state.note,
      };

    case 'VIEW_NOTE':
      return {
        list: state.list,
        status: action.type,
        note: state.list.find(({ id }) => id === action.id),
      };

    default:
      return state;
  }
};
