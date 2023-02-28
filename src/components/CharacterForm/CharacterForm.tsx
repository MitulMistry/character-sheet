import React, { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { loadCharFormData, selectCharFormData } from './characterFormSlice';
import { rulesets } from '../../data/constants';
import { strToNum } from '../../app/helpers';
import { NEW_CHAR_ID } from '../../app/helpers';

import {
  createCharacter,
  updateCharacter,
  deleteCurrentCharacter,
  selectCurrentCharacter,
  selectCurrentCharacterId
} from '../../features/characters/charactersSlice';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './CharacterForm.css';

function CharacterForm() {
  const formData = useAppSelector(selectCharFormData);
  const dispatch = useAppDispatch();

  const currentCharacterId = useAppSelector(selectCurrentCharacterId);
  const currentCharacterData = useAppSelector(selectCurrentCharacter);

  // With an empty array as argument, will dispatch to Redux store
  // only once upon component loading.
  useEffect(() => { dispatch(loadCharFormData(rulesets.dnd5)) }, []);

  const [form, setForm] = useState({
    characterName: '',
    playerName: '',
    race: 'None',
    gender: 'None',
    charClass: 'None',
    level: 1,
    background: 'None',
    alignment: 'None',
    currentHitPoints: 0,
    maxHitPoints: 0,
    armorClass: 0,
    initiative: 0,
    speed: 0,
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
    attacksSpellcasting: '',
    equipment: '',
    savingThrows: '',
    skills: '',
    personalityTraits: '',
    ideals: '',
    bonds: '',
    flaws: '',
    biography: '',
    other: ''
  });

  // Load character data into form if this is a previously created character
  useEffect(() => {
    if (currentCharacterData !== null) {
      setForm({...currentCharacterData});
    }
  }, []);

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Create new character
    if (currentCharacterId === NEW_CHAR_ID) {
      dispatch(createCharacter(form));

    } else {
      // Update existing character
      dispatch(updateCharacter(form));
    }    
  }

  const handleDelete = () => {
    if (currentCharacterId !== NEW_CHAR_ID) {
      dispatch(deleteCurrentCharacter());
    }
  }

  return (
    <Container>
      <Form className="characterForm" onSubmit={ handleSubmit }>
          <Row>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="characterName">
                <Form.Label>Character Name</Form.Label>
                <Form.Control
                  type="text"
                  value={ form.characterName }
                  onChange={ event => {
                    setForm({
                      ...form,
                      characterName: event.target.value
                    });
                  }}
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="playerName">
                <Form.Label>Player Name</Form.Label>
                <Form.Control
                  type="text"
                  value={ form.playerName }
                  onChange={ event => {
                    setForm({
                      ...form,
                      playerName: event.target.value
                    });
                  }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="race">
                <Form.Label>Race</Form.Label>
                <Form.Select
                  value={ form.race }
                  onChange={ event => {
                    setForm({
                      ...form,
                      race: event.target.value
                    });
                  }}
                >
                  <option key={`race-race`}>None</option>
                  {formData.races.map((race, idx) => (<option key={`race-${idx}`}>{race}</option>))}                  
                </Form.Select>
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Select
                  value={ form.gender }
                  onChange={ event => {
                    setForm({
                      ...form,
                      gender: event.target.value
                    });
                  }}
                >
                  <option key={`race-gender`}>None</option>
                  {formData.genders.map((gender, idx) => (<option key={`gender-${idx}`}>{gender}</option>))}                  
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="charClass">
                <Form.Label>Class</Form.Label>
                <Form.Select
                  value={ form.charClass }
                  onChange={ event => {
                    setForm({
                      ...form,
                      charClass: event.target.value
                    });
                  }}
                >
                  <option key={`race-charClass`}>None</option>
                  {formData.charClasses.map((charClass, idx) => (<option key={`charClass-${idx}`}>{charClass}</option>))}                  
                </Form.Select>
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="level">
                <Form.Label>Level</Form.Label>
                <Form.Select
                  value={ form.level }
                  onChange={ event => {
                    setForm({
                      ...form,
                      level: strToNum(event.target.value)
                    });
                  }}
                >
                  { [...Array(formData.maxLevel)].map((val, idx) => (
                      <option key={"lvl-" + (idx + 1)}>{idx + 1}</option>
                    ))
                  }
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="background">
                <Form.Label>Background</Form.Label>
                <Form.Select
                  value={ form.background }
                  onChange={ event => {
                    setForm({
                      ...form,
                      background: event.target.value
                    });
                  }}
                >
                  <option key={`background-default`}>None</option>
                  {formData.backgrounds.map((background, idx) => (<option key={`background-${idx}`}>{background}</option>))}                  
                </Form.Select>
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="alignment">
                <Form.Label>Alignment</Form.Label>
                <Form.Select
                  value={ form.alignment }
                  onChange={ event => {
                    setForm({
                      ...form,
                      alignment: event.target.value
                    });
                  }}
                >
                  <option key={`alignment-default`}>None</option>
                  {formData.alignments.map((alignment, idx) => (<option key={`alignment-${idx}`}>{alignment}</option>))}                  
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <hr />

          <Row>
            <Col xs={6} md={3}>
              <Form.Group className="mb-3" controlId="currentHitPoints">
                <Form.Label>Current Hit Points</Form.Label>
                <Form.Control
                  type="number"
                  value={ form.currentHitPoints }
                  onChange={ event => {
                    setForm({
                      ...form,
                      currentHitPoints: strToNum(event.target.value)
                    });
                  }}
                />
              </Form.Group>
            </Col>

            <Col xs={6} md={3}>
              <Form.Group className="mb-3" controlId="maxHitPoints">
                <Form.Label>Max Hit Points</Form.Label>
                <Form.Control
                  type="number"
                  value={ form.maxHitPoints }
                  onChange={ event => {
                    setForm({
                      ...form,
                      maxHitPoints: strToNum(event.target.value)
                    });
                  }}
                />
              </Form.Group>
            </Col>

            <Col xs={6} md={2}>
              <Form.Group className="mb-3" controlId="armorClass">
                <Form.Label>Armor Class</Form.Label>
                <Form.Control
                  type="number"
                  value={ form.armorClass }
                  onChange={ event => {
                    setForm({
                      ...form,
                      armorClass: strToNum(event.target.value)
                    });
                  }}
                />
              </Form.Group>
            </Col>

            <Col xs={6} md={2}>
              <Form.Group className="mb-3" controlId="initiative">
                <Form.Label>Initiative</Form.Label>
                <Form.Control
                  type="number"
                  value={ form.initiative }
                  onChange={ event => {
                    setForm({
                      ...form,
                      initiative: strToNum(event.target.value)
                    });
                  }}
                />
              </Form.Group>
            </Col>

            <Col xs={6} md={2}>
              <Form.Group className="mb-3" controlId="speed">
                <Form.Label>Speed</Form.Label>
                <Form.Control
                  type="number"
                  value={ form.speed }
                  onChange={ event => {
                    setForm({
                      ...form,
                      speed: strToNum(event.target.value)
                    });
                  }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={2}>
              <Form.Group className="mb-3" controlId="strength">
                <Form.Label>Strength</Form.Label>
                <Form.Control
                  type="number"
                  value={ form.strength }
                  onChange={ event => {
                    setForm({
                      ...form,
                      strength: strToNum(event.target.value)
                    });
                  }}
                />
              </Form.Group>
            </Col>

            <Col xs={6} md={2}>
              <Form.Group className="mb-3" controlId="dexterity">
                <Form.Label>Dexterity</Form.Label>
                <Form.Control
                  type="number"
                  value={ form.dexterity }
                  onChange={ event => {
                    setForm({
                      ...form,
                      dexterity: strToNum(event.target.value)
                    });
                  }}
                />
              </Form.Group>
            </Col>

            <Col xs={6} md={2}>
              <Form.Group className="mb-3" controlId="constitution">
                <Form.Label>Constitution</Form.Label>
                <Form.Control
                  type="number"
                  value={ form.constitution }
                  onChange={ event => {
                    setForm({
                      ...form,
                      constitution: strToNum(event.target.value)
                    });
                  }}
                />
              </Form.Group>
            </Col>

            <Col xs={6} md={2}>
              <Form.Group className="mb-3" controlId="intelligence">
                <Form.Label>Intelligence</Form.Label>
                <Form.Control
                  type="number"
                  value={ form.intelligence }
                  onChange={ event => {
                    setForm({
                      ...form,
                      intelligence: strToNum(event.target.value)
                    });
                  }}
                />
              </Form.Group>
            </Col>

            <Col xs={6} md={2}>
              <Form.Group className="mb-3" controlId="wisdom">
                <Form.Label>Wisdom</Form.Label>
                <Form.Control
                  type="number"
                  value={ form.wisdom }
                  onChange={ event => {
                    setForm({
                      ...form,
                      wisdom: strToNum(event.target.value)
                    });
                  }}
                />
              </Form.Group>
            </Col>

            <Col xs={6} md={2}>
              <Form.Group className="mb-3" controlId="charisma">
                <Form.Label>Charisma</Form.Label>
                <Form.Control
                  type="number"
                  value={ form.charisma }
                  onChange={ event => {
                    setForm({
                      ...form,
                      charisma: strToNum(event.target.value)
                    });
                  }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="attacksSpellcasting">
                <Form.Label>Attacks & Spellcasting</Form.Label>
                <Form.Control as="textarea" rows={5}
                  value={ form.attacksSpellcasting }
                  onChange={ event => {
                    setForm({
                      ...form,
                      attacksSpellcasting: event.target.value
                    });
                  }}
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="equipment">
                <Form.Label>Equipment</Form.Label>
                <Form.Control as="textarea" rows={5}
                  value={ form.equipment }
                  onChange={ event => {
                    setForm({
                      ...form,
                      equipment: event.target.value
                    });
                  }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="savingThrows">
                <Form.Label>Saving Throws</Form.Label>
                <Form.Control as="textarea" rows={5}
                  value={ form.savingThrows }
                  onChange={ event => {
                    setForm({
                      ...form,
                      savingThrows: event.target.value
                    });
                  }}
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="skills">
                <Form.Label>Skills</Form.Label>
                <Form.Control as="textarea" rows={5}
                  value={ form.skills }
                  onChange={ event => {
                    setForm({
                      ...form,
                      skills: event.target.value
                    });
                  }}
                />
              </Form.Group>
            </Col>
          </Row>

          <hr />

          <Row>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="personalityTraits">
                <Form.Label>Personality Traits</Form.Label>
                <Form.Control type="text"
                  value={ form.personalityTraits }
                  onChange={ event => {
                    setForm({
                      ...form,
                      personalityTraits: event.target.value
                    });
                  }}
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="ideals">
                <Form.Label>Ideals</Form.Label>
                <Form.Control type="text"
                  value={ form.ideals }
                  onChange={ event => {
                    setForm({
                      ...form,
                      ideals: event.target.value
                    });
                  }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="bonds">
                <Form.Label>Bonds</Form.Label>
                <Form.Control type="text"
                  value={ form.bonds }
                  onChange={ event => {
                    setForm({
                      ...form,
                      bonds: event.target.value
                    });
                  }}
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="flaws">
                <Form.Label>Flaws</Form.Label>
                <Form.Control type="text"
                  value={ form.flaws }
                  onChange={ event => {
                    setForm({
                      ...form,
                      flaws: event.target.value
                    });
                  }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="biography">
                <Form.Label>Biography</Form.Label>
                <Form.Control as="textarea" rows={5}
                  value={ form.biography }
                  onChange={ event => {
                    setForm({
                      ...form,
                      biography: event.target.value
                    });
                  }}
                />
              </Form.Group>
            </Col>
          </Row>

          <hr />

          <Row>
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="other">
                <Form.Label>Other</Form.Label>
                <Form.Control as="textarea" rows={5}
                  value={ form.other }
                  onChange={ event => {
                    setForm({
                      ...form,
                      other: event.target.value
                    });
                  }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <div className="formButton">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                {
                  currentCharacterId !== NEW_CHAR_ID &&
                  <Button variant="primary" onClick={handleDelete}>
                    Delete
                  </Button>
                }
              </div>
            </Col>
          </Row>
      </Form>
    </Container>
  );
}

export default CharacterForm;