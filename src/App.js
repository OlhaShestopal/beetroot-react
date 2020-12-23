import { useReducer, useState } from 'react';
import { StoreContext, reducer, initialState } from './store';
import { AppHeader } from './components/AppHeader';
import { Todos } from './components/Todos';
import { CreateTodoModal } from './components/CreateTodoModal';
import './main.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isVisible, setVisible] = useState(false);

  return (
    <div className="App">
      <StoreContext.Provider value={{ state, dispatch }}>
        <AppHeader handleOpenModal={() => setVisible(true)} />
        <Todos />
        {isVisible && <CreateTodoModal />}
      </StoreContext.Provider>
    </div>
  );
}

export {
  App
};
