import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { setCurrentCharacterId } from '../../features/characters/charactersSlice';
import { strToNum } from '../../app/helpers';
import CharacterForm from '../CharacterForm/CharacterForm';

type EditParams = {
  id: string;
};

function CharacterEdit() {
  const dispatch = useAppDispatch();
  let { id } = useParams<EditParams>();

  useEffect(() => { id && dispatch(setCurrentCharacterId(strToNum(id))) }, []);

  return (
    <CharacterForm />
  );
}

export default CharacterEdit;