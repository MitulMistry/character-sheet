import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';
import { useAppDispatch } from '../../app/hooks';
import { setCurrentCharacterId, deleteCharacter } from '../../features/characters/charactersSlice';

import './CharacterCard.css';

interface CharacterInfo {
  id: number,
  characterName: string,
  playerName: string,
  race: string,
  gender: string,
  charClass: string,
  level: number
}

function CharacterCard(props: CharacterInfo) {
  const dispatch = useAppDispatch();

  const handleEdit = () => dispatch(setCurrentCharacterId(props.id));
  const handleDelete = () => dispatch(deleteCharacter(props.id));

  return (
  <Card className="character-card">
    <Card.Body>
      <Card.Title>{props.characterName || 'Unnamed Character'}</Card.Title>
      <Card.Text>Player: {props.playerName || 'Unnamed Player'}</Card.Text>
      <Card.Text>Race: {props.race || 'None'}</Card.Text>
      <Card.Text>Gender: {props.gender || 'None'}</Card.Text>
      <Card.Text>Class: {props.charClass || 'None'}</Card.Text>
      <Card.Text>Level: {props.level || '1'}</Card.Text>
      <div className="buttons">
        <LinkContainer to={"/edit/" + props.id}>
          <Button variant="primary" onClick={handleEdit}>Edit</Button>
        </LinkContainer>
        <Button variant="primary" onClick={handleDelete}>Delete</Button>
      </div>
    </Card.Body>
  </Card>
  );
}

export default CharacterCard;