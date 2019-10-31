export default ({ list = [] } = {}, filters) => {
  list = list.filter(note => {
    // allow note to display
    let allowed = true;

    // filters
    if (filters.status === 'open') allowed &= note.status === true;
    if (filters.status === 'done') allowed &= note.status === false;
    if (filters.priority === 'high') allowed &= note.priority === 'high';
    if (filters.priority === 'normal') allowed &= note.priority === 'normal';
    if (filters.priority === 'low') allowed &= note.priority === 'low';
    if (filters.title)
      allowed &= note.title.toLowerCase().includes(filters.title.toLowerCase());

    return allowed;
  });

  return list.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
};
