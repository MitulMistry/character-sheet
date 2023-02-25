import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Character {
  characterName: string;
  playerName: string;
  race: string;
  gender: string;
  charClass: string;
  level: number;
  background: string;
  alignment: string;
  currentHitPoints: number;
  maxHitPoints: number;
  armorClass: number;
  initiative: number;
  speed: number;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  attacksSpellcasting: string;
  equipment: string;
  savingThrows: string;
  skills: string;
  personalityTraits: string;
  ideals: string;
  bonds: string;
  flaws: string;
  biography: string;
  other: string;
}

export interface CharactersState {
  currentCharacterId: number;
  savedCharacters: Character[];
}

const initialState: CharactersState = {
  currentCharacterId: 0,
  savedCharacters: []
}

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    createCharacter: (state, action: PayloadAction<Character>) => {
      state.savedCharacters.push(action.payload);
      state.currentCharacterId = state.savedCharacters.length - 1;
    },
    updateCharacter: (state, action: PayloadAction<Character>) => {
      const id = state.currentCharacterId;
      state.savedCharacters[id] = action.payload;
    },
    deleteCharacter: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.savedCharacters.splice(id, 1);
      state.currentCharacterId = initialState.currentCharacterId;
    },
    resetCharacters: (state) => {
      state = initialState;
    }
  }
});

// Actions
export const {
  createCharacter,
  updateCharacter,
  deleteCharacter,
  resetCharacters
} = charactersSlice.actions;

// Selectors
export const selectCurrentCharacter = (state: RootState) => {
  const id = state.characters.currentCharacterId;
  return state.characters.savedCharacters[id];
};
export const selectCharacter = (state: RootState, id: number) => state.characters.savedCharacters[id];

export default charactersSlice.reducer;