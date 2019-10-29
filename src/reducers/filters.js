const filterReducerDefaultState = {
  title: '',
  status: 'all',
  priority: 'all'
};

export default (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TITLE_FILTER':
      return { ...state, title: action.title };

    case 'SORT_BY_STATUS_ALL':
      return { ...state, status: 'all' };

    case 'SORT_BY_STATUS_OPEN':
      return { ...state, status: 'open' };

    case 'SORT_BY_STATUS_DONE':
      return { ...state, status: 'done' };

    case 'SORT_BY_PRIORITY_ALL':
      return { ...state, priority: 'all' };

    case 'SORT_BY_PRIORITY_HIGH':
      return { ...state, priority: 'high' };

    case 'SORT_BY_PRIORITY_NORMAL':
      return { ...state, priority: 'normal' };

    case 'SORT_BY_PRIORITY_LOW':
      return { ...state, priority: 'low' };

    default:
      return state;
  }
};
