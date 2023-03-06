import React from 'react';
import { selectCharacters } from '../../features/characters/charactersSlice';
import { useAppSelector } from '../../app/hooks';
import Masonry from 'react-masonry-css';
import CharacterCard from './CharacterCard';
import { Character } from '../../features/characters/charactersSlice';
import { Link } from 'react-router-dom';
import './LoadCharacters.css';

function LoadCharacters() {
  const characters: Character[] = useAppSelector(selectCharacters);
  const breakpointColumnsObj = {
    default: 3,
    1199: 2,
    767: 1
  };

  return (
    <div className="load-characters">
      {characters.length === 0 && 
        <div className="no-characters">
          <p>You have not created any characters yet. Once you do, they will show up here.</p>
          <p>Create a new character <Link to="/new">here</Link>.</p>
        </div>
      }
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column">      
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
      </Masonry>
    </div>
  );
}

export default LoadCharacters;