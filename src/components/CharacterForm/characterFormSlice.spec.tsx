import characterFormReducer, {
  CharacterFormState,
  resetCharFormData,
  loadCharFormData
} from './characterFormSlice';

import { rulesets } from '../../data/constants';

describe('character form reducer', () => {
  const initialState: CharacterFormState = {
    data: {
      races: [],
      genders: [],
      charClasses: [],
      maxLevel: 0,
      backgrounds: [],
      alignments: []
    }
  };

  const testState: CharacterFormState = {
    data: {
      races: ['Human', 'Elf'],
      genders: ['Male', 'Female', 'Other'],
      charClasses: ['Fighter', 'Wizard'],
      maxLevel: 10,
      backgrounds: ['Acolyte', 'Charlatan'],
      alignments: ['Neutral Good', 'Chaotic Evil']
    }
  };

  it('should handle initial state', () => {
    expect(characterFormReducer(undefined, { type: 'unknown'})).toEqual(initialState);
  });

  it('should handle resetting character form data', () => {
    const actual = characterFormReducer(testState, resetCharFormData());
    expect(actual).toEqual(initialState);
  });

  it('should handle loading DND5 character form data', () => {
    const actual = characterFormReducer(initialState, loadCharFormData(rulesets.dnd5));
    expect(actual.data.maxLevel).toEqual(20);
  });
});