export const actionSetTitleFilter = (title) => ({
  type: 'SET_TITLE_FILTER',
  title,
});

export const actionSortByStatusAll = () => ({
  type: 'SORT_BY_STATUS_ALL',
});

export const actionSortByStatusOpen = () => ({
  type: 'SORT_BY_STATUS_OPEN',
});

export const actionSortByStatusDone = () => ({
  type: 'SORT_BY_STATUS_DONE',
});

export const actionSortByPriorityAll = () => ({
  type: 'SORT_BY_PRIORITY_ALL',
});

export const actionSortByPriorityHigh = () => ({
  type: 'SORT_BY_PRIORITY_HIGH',
});

export const actionSortByPriorityNormal = () => ({
  type: 'SORT_BY_PRIORITY_NORMAL',
});

export const actionSortByPriorityLow = () => ({
  type: 'SORT_BY_PRIORITY_LOW',
});
