import { useContext } from 'react';
import { StoreContext } from '../../store';
import { Button } from '../Button';
import './style.css';

function AppHeader({ handleOpenModal }) {
  const { state } = useContext(StoreContext);

  return (
    <header className="app-header">
      <h1 className="app-header__title">
        Todo App
      </h1>

      <div className="app-header__right-side">
        <Button onClick={handleOpenModal}>
          Create Todo
        </Button>

        <div className="user">
          <div className="user__avatar" />
          <span className="user__name">
            Hello, {state.role}!
        </span>
        </div>
      </div>
    </header>
  )
}

export {
  AppHeader
}