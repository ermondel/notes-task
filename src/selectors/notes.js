export default ({ list = [] } = {}, filters) => {
  const filteredList = list.filter((note) => {
    // allow note to display
    let allowed = true;

    // filters
    if (filters.status === 'open') {
      allowed = allowed && note.status === true;
    }
    if (filters.status === 'done') {
      allowed = allowed && note.status === false;
    }
    if (filters.priority === 'high') {
      allowed = allowed && note.priority === 'high';
    }
    if (filters.priority === 'normal') {
      allowed = allowed && note.priority === 'normal';
    }
    if (filters.priority === 'low') {
      allowed = allowed && note.priority === 'low';
    }
    if (filters.title) {
      const noteTitle = note.title.toLowerCase();
      const filtersTitle = filters.title.toLowerCase();

      allowed = allowed && noteTitle.includes(filtersTitle);
    }

    return allowed;
  });

  return filteredList.sort((a, b) => {
    if (a.date < b.date) return 1;
    return a.date > b.date ? -1 : 0;
  });
};
