import * as types from './actions';

function reducer(state, action) {
  switch (action.type) {
    case types.FETCH_TODOS: {
      return {
        ...state,
        todos: action.payload
      }
    }

    case types.CREATE_TODO: {
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      }
    }

    case types.EDIT_TODO: {
      const { id, ...todo } = action.payload;
      const todos = [...state.todos];
      const position = todos.findIndex(item => item.id === id);

      let currentTodo = todos[position];
      currentTodo = {
        ...currentTodo,
        ...todo
      };

      todos[position] = currentTodo;

      return {
        ...state,
        todos
      }
    }

    case types.DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      }
    }

    default: {
      return state
    }
  }
}

export {
  reducer
}