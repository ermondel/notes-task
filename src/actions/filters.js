export const setTitleFilter = title => ({
  type: 'SET_TITLE_FILTER',
  title
});

export const sortByStatusAll = () => ({
  type: 'SORT_BY_STATUS_ALL'
});

export const sortByStatusOpen = () => ({
  type: 'SORT_BY_STATUS_OPEN'
});

export const sortByStatusDone = () => ({
  type: 'SORT_BY_STATUS_DONE'
});

export const sortByPriorityAll = () => ({
  type: 'SORT_BY_PRIORITY_ALL'
});

export const sortByPriorityHigh = () => ({
  type: 'SORT_BY_PRIORITY_HIGH'
});

export const sortByPriorityNormal = () => ({
  type: 'SORT_BY_PRIORITY_NORMAL'
});

export const sortByPriorityLow = () => ({
  type: 'SORT_BY_PRIORITY_LOW'
});
