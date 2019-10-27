const notesReducerDefaultState = {
  list: [],
  status: 'NONE',
  lastID: 0
};

export default (state = notesReducerDefaultState, action) => {
  //
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        list: [...state.list, action.note],
        status: action.status,
        lastID: action.note.id
      };

    case 'UPDATE_NOTE':
      return {
        list: state.list.map(note => {
          if (note.id === action.id) {
            return { ...note, ...action.updates };
          } else {
            return note;
          }
        }),
        status: action.status,
        lastID: action.id
      };

    case 'REMOVE_NOTE':
      return {
        list: state.list.filter(({ id }) => id !== action.id),
        status: action.status,
        lastID: action.id
      };

    case 'CREATE_NOTE':
      return {
        list: state.list,
        lastID: state.lastID,
        status: action.status
      };

    case 'CLOSE_NOTE':
      return {
        list: state.list,
        lastID: state.lastID,
        status: action.status
      };

    case 'EDIT_NOTE':
      return {
        list: state.list,
        lastID: action.id,
        status: action.status
      };

    default:
      return state;
  }
};
