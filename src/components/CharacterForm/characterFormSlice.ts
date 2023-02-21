import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import dnd5Data from '../../data/forms/characterDnd5.json';

export interface CharacterFormState {
  data: object;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CharacterFormState = {
  data: {},
  status: 'idle',
};

export const characterFormSlice = createSlice({
  name: 'characterForm',
  initialState,
  reducers: {
    reset: (state) => {
      state = initialState;
    },
    load: (state, action: PayloadAction<string>) => {
      switch (action.payload) {
        case 'dnd5':
          state.data = dnd5Data;
          break;
        default:
          state.data = dnd5Data;
      }
    }
  }
});

export const selectData = (state: RootState) => state.characterForm.data;

export default characterFormSlice.reducer;