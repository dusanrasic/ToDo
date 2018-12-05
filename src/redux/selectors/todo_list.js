export const filterItems = (state, filter) => {
	const {
		todo_list: { items },
	} = state;

	if (!filter) {
		return items;
	}

	const filteredItems = items.filter((item) => {
		if (filter === 'completed') {
			return item.completed;
		} else if (filter === 'active') {
			return !item.completed;
		} else {
			return true;
		}
	});

	return filteredItems;
};
