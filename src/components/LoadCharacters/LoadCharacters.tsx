import React from 'react';
import { selectCharacters } from '../../features/characters/charactersSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Masonry from 'react-masonry-css';
import CharacterCard from './CharacterCard';
import { Character, resetCharacters, loadSampleCharacters, selectSampleCharsLoaded } from '../../features/characters/charactersSlice';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './LoadCharacters.css';

function LoadCharacters() {
  const characters: Character[] = useAppSelector(selectCharacters);
  const breakpointColumnsObj = {
    default: 3,
    1199: 2,
    767: 1
  };

  const sampleCharsLoaded = useAppSelector(selectSampleCharsLoaded);

  const dispatch = useAppDispatch();
  const handleLoadSampleChars = () => dispatch(loadSampleCharacters());
  const handleResetChars = () => dispatch(resetCharacters());

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
      <div className="load-buttons">
        {characters.length > 0 &&
          <Button variant="primary" onClick={handleResetChars}>Reset Characters</Button>
        }
        {!sampleCharsLoaded &&
          <Button variant="primary" onClick={handleLoadSampleChars}>Load Sample Characters</Button>
        }
      </div>
    </div>
  );
}

export default LoadCharacters;