import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import characterFormReducer from '../components/CharacterForm/characterFormSlice';
import charactersReducer from '../features/characters/charactersSlice';

// Load the Redux state from the browser's local storage (if it exists)
export const loadStateFromLocal = () => {
  const preloadedState = localStorage.charSheetState ?
    JSON.parse(localStorage.charSheetState) : {};
  return preloadedState;
};

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    characterForm: characterFormReducer,
    characters: charactersReducer
  },
  preloadedState: loadStateFromLocal(),
});

// Save changes to Redux store to browser's local storage
export const subscribeStoreToLocal = (store: StoreType) => {
  store.subscribe(() => {
    let state = store.getState();
    localStorage.charSheetState = JSON.stringify(state);
  });
};

export type StoreType = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
