import React, { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { loadCharFormData, selectCharFormData } from './characterFormSlice';
import { rulesets } from '../../data/constants';
import { strToNum } from '../../app/helpers';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './CharacterForm.css';

function CharacterForm() {
  const formData = useAppSelector(selectCharFormData);
  const dispatch = useAppDispatch();

  // With an empty array as argument, will dispatch to Redux store
  // only once upon component loading.
  useEffect(() => { dispatch(loadCharFormData(rulesets.dnd5)) }, []);

  const [characterName, setCharacterName] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [race, setRace] = useState('None');
  const [gender, setGender] = useState('None');
  const [charClass, setCharClass] = useState('None');
  const [level, setLevel] = useState(1);
  const [background, setBackground] = useState('None');
  const [alignment, setAlignment] = useState('None');
  const [currentHitPoints, setCurrentHitPoints] = useState(0);
  const [maxHitPoints, setMaxHitPoints] = useState(0);
  const [armorClass, setArmorClass] = useState(0);
  const [initiative, setInitiative] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [strength, setStrength] = useState(0);
  const [dexterity, setDexterity] = useState(0);
  const [constitution, setConstitution] = useState(0);
  const [intelligence, setIntelligence] = useState(0);
  const [wisdom, setWisdom] = useState(0);
  const [charisma, setCharisma] = useState(0);
  const [attacksSpellcasting, setAttacksSpellcasting] = useState('');
  const [equipment, setEquipment] = useState('');
  const [savingThrows, setSavingThrows] = useState('');
  const [skills, setSkills] = useState('');
  const [personalityTraits, setPersonalityTraits] = useState('');
  const [ideals, setIdeals] = useState('');
  const [bonds, setBonds] = useState('');
  const [flaws, setFlaws] = useState('');
  const [biography, setBiography] = useState('');
  const [other, setOther] = useState('');

  return (
    <Container>
      <Form className="characterForm">
          <Row>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="characterName">
                <Form.Label>Character Name</Form.Label>
                <Form.Control
                  type="text"
                  value={ characterName }
                  onChange={ event => setCharacterName(event.target.value) }
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="playerName">
                <Form.Label>Player Name</Form.Label>
                <Form.Control
                  type="text"
                  value={ playerName }
                  onChange={ event => setPlayerName(event.target.value) }
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="race">
                <Form.Label>Race</Form.Label>
                <Form.Select
                  value={ race }
                  onChange={ event => setRace(event.target.value) }
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
                  value={ gender }
                  onChange={ event => setGender(event.target.value) }
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
                  value={ charClass }
                  onChange={ event => setCharClass(event.target.value) }
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
                  value={ level }
                  onChange={ event => setLevel(strToNum(event.target.value)) }
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
                  value={ background }
                  onChange={ event => setBackground(event.target.value) }
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
                  value={ alignment }
                  onChange={ event => setAlignment(event.target.value) }
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
                  value={ currentHitPoints }
                  onChange={ event => setCurrentHitPoints(strToNum(event.target.value)) }
                />
              </Form.Group>
            </Col>

            <Col xs={6} md={3}>
              <Form.Group className="mb-3" controlId="maxHitPoints">
                <Form.Label>Max Hit Points</Form.Label>
                <Form.Control
                  type="number"
                  value={ maxHitPoints }
                  onChange={ event => setMaxHitPoints(strToNum(event.target.value)) }
                />
              </Form.Group>
            </Col>

            <Col xs={6} md={2}>
              <Form.Group className="mb-3" controlId="armorClass">
                <Form.Label>Armor Class</Form.Label>
                <Form.Control
                  type="number"
                  value={ armorClass }
                  onChange={ event => setArmorClass(strToNum(event.target.value)) }
                />
              </Form.Group>
            </Col>

            <Col xs={6} md={2}>
              <Form.Group className="mb-3" controlId="initiative">
                <Form.Label>Initiative</Form.Label>
                <Form.Control
                  type="number"
                  value={ initiative }
                  onChange={ event => setInitiative(strToNum(event.target.value)) }
                />
              </Form.Group>
            </Col>

            <Col xs={6} md={2}>
              <Form.Group className="mb-3" controlId="speed">
                <Form.Label>Speed</Form.Label>
                <Form.Control
                  type="number"
                  value={ speed }
                  onChange={ event => setSpeed(strToNum(event.target.value)) }
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
                  value={ strength }
                  onChange={ event => setStrength(strToNum(event.target.value)) }
                />
              </Form.Group>
            </Col>

            <Col xs={6} md={2}>
              <Form.Group className="mb-3" controlId="dexterity">
                <Form.Label>Dexterity</Form.Label>
                <Form.Control
                  type="number"
                  value={ dexterity }
                  onChange={ event => setDexterity(strToNum(event.target.value)) }
                />
              </Form.Group>
            </Col>

            <Col xs={6} md={2}>
              <Form.Group className="mb-3" controlId="constitution">
                <Form.Label>Constitution</Form.Label>
                <Form.Control
                  type="number"
                  value={ constitution }
                  onChange={ event => setConstitution(strToNum(event.target.value)) }
                />
              </Form.Group>
            </Col>

            <Col xs={6} md={2}>
              <Form.Group className="mb-3" controlId="intelligence">
                <Form.Label>Intelligence</Form.Label>
                <Form.Control
                  type="number"
                  value={ intelligence }
                  onChange={ event => setIntelligence(strToNum(event.target.value)) }
                />
              </Form.Group>
            </Col>

            <Col xs={6} md={2}>
              <Form.Group className="mb-3" controlId="wisdom">
                <Form.Label>Wisdom</Form.Label>
                <Form.Control
                  type="number"
                  value={ wisdom }
                  onChange={ event => setWisdom(strToNum(event.target.value)) }
                />
              </Form.Group>
            </Col>

            <Col xs={6} md={2}>
              <Form.Group className="mb-3" controlId="charisma">
                <Form.Label>Charisma</Form.Label>
                <Form.Control
                  type="number"
                  value={ charisma }
                  onChange={ event => setCharisma(strToNum(event.target.value)) }
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="attacksSpellcasting">
                <Form.Label>Attacks & Spellcasting</Form.Label>
                <Form.Control as="textarea" rows={5}
                  value={ attacksSpellcasting }
                  onChange={ event => setAttacksSpellcasting(event.target.value) }
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="equipment">
                <Form.Label>Equipment</Form.Label>
                <Form.Control as="textarea" rows={5}
                  value={ equipment }
                  onChange={ event => setEquipment(event.target.value) }
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="savingThrows">
                <Form.Label>Saving Throws</Form.Label>
                <Form.Control as="textarea" rows={5}
                  value={ savingThrows }
                  onChange={ event => setSavingThrows(event.target.value) }
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="skills">
                <Form.Label>Skills</Form.Label>
                <Form.Control as="textarea" rows={5}
                  value={ skills }
                  onChange={ event => setSkills(event.target.value) }
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
                  value={ personalityTraits }
                  onChange={ event => setPersonalityTraits(event.target.value) }
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="ideals">
                <Form.Label>Ideals</Form.Label>
                <Form.Control type="text"
                  value={ ideals }
                  onChange={ event => setIdeals(event.target.value) }
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="bonds">
                <Form.Label>Bonds</Form.Label>
                <Form.Control type="text"
                  value={ bonds }
                  onChange={ event => setBonds(event.target.value) }
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="flaws">
                <Form.Label>Flaws</Form.Label>
                <Form.Control type="text"
                  value={ flaws }
                  onChange={ event => setFlaws(event.target.value) }
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="biography">
                <Form.Label>Biography</Form.Label>
                <Form.Control as="textarea" rows={5}
                  value={ biography }
                  onChange={ event => setBiography(event.target.value) }
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
                  value={ other }
                  onChange={ event => setOther(event.target.value) }
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
              </div>
            </Col>
          </Row>
      </Form>
    </Container>
  );
}

export default CharacterForm;