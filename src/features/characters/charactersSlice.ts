import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { NEW_CHAR_ID } from '../../app/helpers';

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
  currentCharacterId: NEW_CHAR_ID,
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
      if (id >= 0 && id < state.savedCharacters.length) {
        state.savedCharacters.splice(id, 1);
        state.currentCharacterId = initialState.currentCharacterId;
      }      
    },
    deleteCurrentCharacter: (state) => {
      const id = state.currentCharacterId;
      if (id >= 0 && id < state.savedCharacters.length) {
        state.savedCharacters.splice(id, 1);
        state.currentCharacterId = initialState.currentCharacterId;
      }
    },
    resetCharacters: (state) => {
      state = initialState;
    },
    setCurrentCharacterId: (state, action: PayloadAction<number>) => {
      state.currentCharacterId = action.payload;
    },
    setNewCurrentCharacterId: (state) => {
      state.currentCharacterId = NEW_CHAR_ID;
    }
  }
});

// Actions
export const {
  createCharacter,
  updateCharacter,
  deleteCharacter,
  deleteCurrentCharacter,
  resetCharacters,
  setCurrentCharacterId,
  setNewCurrentCharacterId
} = charactersSlice.actions;

// Selectors
export const selectCurrentCharacter = (state: RootState) => {
  const id = state.characters.currentCharacterId;
  return (id >= 0) ? state.characters.savedCharacters[id] : null;
};

export const selectCurrentCharacterId = (state: RootState) => {
  return state.characters.currentCharacterId;
};

export const selectCharacter = (state: RootState, id: number) => {
  return state.characters.savedCharacters[id];
}

export default charactersSlice.reducer;