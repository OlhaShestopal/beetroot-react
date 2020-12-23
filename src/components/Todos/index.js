import { useContext } from 'react';
import { StoreContext } from '../../store';
import * as types from '../../store/actions';
import { Button } from '../Button';
import './style.css';

function Todos() {
  const { state, dispatch } = useContext(StoreContext)

  const handleDelete = (id) => {
    dispatch({
      type: types.DELETE_TODO,
      payload: {
        id
      }
    })
  }

  return (
    <div className="todos">
      <ul className="todos__list">
        {state.todos.map(todo =>
          <li
            key={todo.id}
            className="todos__item"
          >

            <div className="todos__body">
              <span className="todos__description">
                {todo.description}
              </span>
            </div>

            <div className="todos__actions">
              <Button>
                Edit
              </Button>
              <Button onClick={() => handleDelete(todo.id)}>
                Delete
              </Button>
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}

export {
  Todos
}