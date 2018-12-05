import { createSelector } from 'reselect';

export const getVisibilityFilter = state => state.data.activeFilter;
export const getTodos = state => state.data.ToDoItems;

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
  switch (visibilityFilter) {
      case 'View All':
        console.log('VIEW ALL SELECTED');
        return todos
      case 'Active':
        console.log('ACTIVE SELECTED');
        return todos.filter(t => t.active)
      case 'Completed':
        console.log('COMPLETED SELECTED');
        return todos.filter(t => !t.active)
      default:
        return todos
    }
  }
)