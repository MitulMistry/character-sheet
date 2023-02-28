import React, { useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { setNewCurrentCharacterId } from '../../features/characters/charactersSlice';
import CharacterForm from '../CharacterForm/CharacterForm';

function CharacterNew() {
  const dispatch = useAppDispatch();

  useEffect(() => { dispatch(setNewCurrentCharacterId()) }, []);

  return (
    <CharacterForm />
  );
}

export default CharacterNew;