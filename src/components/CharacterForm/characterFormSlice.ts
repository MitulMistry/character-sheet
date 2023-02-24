import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import dnd5Data from '../../data/forms/characterDnd5.json';
import { rulesets } from '../../data/constants';

export interface CharacterFormState {
  data: object;
}

const initialState: CharacterFormState = {
  data: {},
};

export const characterFormSlice = createSlice({
  name: 'characterForm',
  initialState,
  reducers: {
    resetCharFormData: (state) => {
      state = initialState;
    },
    loadCharFormData: (state, action: PayloadAction<string>) => {
      switch (action.payload) {
        case rulesets.dnd5:
          state.data = dnd5Data;
          break;
        default:
          state.data = dnd5Data;
      }
    }
  }
});

// Actions to initiate changes to store
export const { resetCharFormData, loadCharFormData } = characterFormSlice.actions;

// Selector to access data in store
export const selectCharFormData = (state: RootState) => state.characterForm.data;

export default characterFormSlice.reducer;