import { createSelector } from 'reselect';

export const getVisibilityFilter = state => state.data.activeFilter;
export const getTodos = state => state.data.ToDoItems;

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
  switch (visibilityFilter) {
      case 'View All':
        return todos
      case 'Active':
        return todos.filter(t => t.active)
      case 'Completed':
        return todos.filter(t => !t.active)
      default:
        return todos
    }
  }
)