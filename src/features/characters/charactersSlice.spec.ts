import charactersReducer, {
  Character,
  CharactersState,
  createCharacter,
  updateCharacter,
  deleteCharacter,
  deleteCurrentCharacter,
  resetCharacters,
  setCurrentCharacterId,
  setNewCurrentCharacterId,
  loadSampleCharacters
} from './charactersSlice';

import { NEW_CHAR_ID } from '../../app/helpers';
import sampleCharacters from '../../data/sampleCharacters.json';

describe('characters reducer', () =>{
  const initialState: CharactersState = {
    currentCharacterId: NEW_CHAR_ID,
    sampleCharsLoaded: false,
    savedCharacters: []
  };

  const testChar1: Character = sampleCharacters[0];
  const testChar2: Character = sampleCharacters[1];

  const testState1: CharactersState = {
    currentCharacterId: 0,
    sampleCharsLoaded: false,
    savedCharacters: [testChar1]
  };

  const testState2: CharactersState = {
    currentCharacterId: 0,
    sampleCharsLoaded: false,
    savedCharacters: [...sampleCharacters]
  };

  it('should handle initial state', () => {
    expect(charactersReducer(undefined, { type: 'unknown'})).toEqual(initialState);
  });

  it('should handle creating a character', () => {
    const actual = charactersReducer(initialState, createCharacter(testChar1));
    expect(actual.savedCharacters.length).toEqual(1);
    expect(actual.savedCharacters[0]).toEqual(testChar1);
  });

  it('should handle updating a character', () => {
    const actual = charactersReducer(testState1, updateCharacter(testChar2));
    expect(actual.savedCharacters[0]).toEqual(testChar2);
  });

  it('should handle deleting a character (by id)', () => {
    const actual = charactersReducer(testState2, deleteCharacter(1));
    expect(actual.savedCharacters.length).toEqual(3);
  });

  it('should handle deleting the current character', () => {
    const actual = charactersReducer(testState1, deleteCurrentCharacter());
    expect(actual.savedCharacters.length).toEqual(0);
  });

  it('should handle resetting the characters', () => {
    const actual = charactersReducer(testState1, resetCharacters());
    expect(actual).toEqual(initialState);
  });

  it('should handle setting current character id', () => {
    const id = 1;
    const actual = charactersReducer(initialState, setCurrentCharacterId(id));
    expect(actual.currentCharacterId).toEqual(id);
  });

  it('should handle setting new current character id', () => {
    const actual = charactersReducer(testState1, setNewCurrentCharacterId());
    expect(actual.currentCharacterId).toEqual(NEW_CHAR_ID);
  });

  it('should handle loading sample characters', () => {
    const actual = charactersReducer(initialState, loadSampleCharacters());
    expect(actual.savedCharacters.length).toEqual(4);
  });
});