import { createContext } from 'react';

const StoreContext = createContext();

export { reducer } from './reducer';
export { initialState } from './state';
export {
  StoreContext
}