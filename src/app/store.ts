import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import characterFormReducer from '../components/CharacterForm/characterFormSlice';
import charactersReducer from '../features/characters/charactersSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    characterForm: characterFormReducer,
    characters: charactersReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
