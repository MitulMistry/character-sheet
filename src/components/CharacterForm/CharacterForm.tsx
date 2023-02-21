import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './CharacterForm.css';

function CharacterForm() {
  return (
    <Container>
      <Form className="characterForm">
          <Row>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="characterName">
                <Form.Label>Character Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="playerName">
                <Form.Label>Player Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="race">
                <Form.Label>Race</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="class">
                <Form.Label>Class</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="playerName">
                <Form.Label>Level</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="background">
                <Form.Label>Background</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="alignment">
                <Form.Label>Alignment</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
          </Row>

          <hr />

          <Row>
            <Col xs={6} md={3}>
              <Form.Group className="mb-3" controlId="currentHitPoints">
                <Form.Label>Current Hit Points</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>

            <Col xs={6} md={3}>
              <Form.Group className="mb-3" controlId="maxHitPoints">
                <Form.Label>Max Hit Points</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>

            <Col xs={6} md={2}>
              <Form.Group className="mb-3" controlId="armorClass">
                <Form.Label>Armor Class</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>

            <Col xs={6} md={2}>
              <Form.Group className="mb-3" controlId="initiative">
                <Form.Label>Initiative</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>

            <Col xs={6} md={2}>
              <Form.Group className="mb-3" controlId="speed">
                <Form.Label>Speed</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={2}>
              <Form.Group className="mb-3" controlId="strength">
                <Form.Label>Strength</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>

            <Col xs={6} md={2}>
              <Form.Group className="mb-3" controlId="dexterity">
                <Form.Label>Dexterity</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>

            <Col xs={6} md={2}>
              <Form.Group className="mb-3" controlId="constitution">
                <Form.Label>Constitution</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>

            <Col xs={6} md={2}>
              <Form.Group className="mb-3" controlId="intelligence">
                <Form.Label>Intelligence</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>

            <Col xs={6} md={2}>
              <Form.Group className="mb-3" controlId="wisdom">
                <Form.Label>Wisdom</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>

            <Col xs={6} md={2}>
              <Form.Group className="mb-3" controlId="charisma">
                <Form.Label>Charisma</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="attacksAndSpellcasting">
                <Form.Label>Attacks & Spellcasting</Form.Label>
                <Form.Control as="textarea" rows={5} />
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="Equipment">
                <Form.Label>Equipment</Form.Label>
                <Form.Control as="textarea" rows={5} />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="savingThrows">
                <Form.Label>Saving Throws</Form.Label>
                <Form.Control as="textarea" rows={5} />
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="Skills">
                <Form.Label>Skills</Form.Label>
                <Form.Control as="textarea" rows={5} />
              </Form.Group>
            </Col>
          </Row>

          <hr />

          <Row>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="personalityTraits">
                <Form.Label>Personality Traits</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="ideals">
                <Form.Label>Ideals</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="bonds">
                <Form.Label>Bonds</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="flaws">
                <Form.Label>Flaws</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="biography">
                <Form.Label>Biography</Form.Label>
                <Form.Control as="textarea" rows={5} />
              </Form.Group>
            </Col>
          </Row>

          <hr />

          <Row>
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="other">
                <Form.Label>Other</Form.Label>
                <Form.Control as="textarea" rows={5} />
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