const notesReducerDefaultState = {
  list: [],
  status: 'NONE'
};

export default (state = notesReducerDefaultState, action) => {
  //
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        list: [...state.list, action.note],
        status: action.status
      };

    case 'EDIT_NOTE':
      return {
        list: state.list.map(note => {
          if (note.id === action.id) {
            return { ...note, ...action.updates };
          } else {
            return note;
          }
        }),
        status: action.status
      };

    case 'REMOVE_NOTE':
      return {
        list: state.list.filter(({ id }) => id !== action.id),
        status: action.status
      };

    case 'CREATE_NOTE':
      return {
        list: state.list,
        status: action.status
      };

    case 'CLOSE_NOTE':
      return {
        list: state.list,
        status: action.status
      };

    default:
      return state;
  }
};
