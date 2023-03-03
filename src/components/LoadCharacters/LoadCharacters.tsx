import React from 'react';
import { selectCharacters } from '../../features/characters/charactersSlice';
import { useAppSelector } from '../../app/hooks';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';
import './LoadCharacters.css';

function LoadCharacters() {
  const characters = useAppSelector(selectCharacters);
  
  return (
    <div className="load-characters">
      {characters.length === 0 && 
        <div className="no-characters">
          <p>You have not created any characters yet. Once you do, they will show up here.</p>
          <p>Create a new character <Link to="/new">here</Link>.</p>
        </div>
      }
      {characters.map((character, idx) => (
        <CharacterCard
          key = {`character-${idx}`}
          id = {idx}
          characterName = {character.characterName}
          playerName = {character.playerName}
          race = {character.race}
          gender = {character.gender}
          charClass = {character.charClass}
          level = {character.level}
        />
      ))}
    </div>
  );
}

export default LoadCharacters;