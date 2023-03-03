import React from 'react';

import { Button, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './Home.css';

function Home() {
  return (
    <div className="home p-5 mb-4 rounded-3">    
      <Container fluid="md">
        <h1>Character Sheet</h1>
        <p>Create character sheets for your table top RPGs.</p>
        <p>Save them and update them as you play.</p>
        <div className="buttons">
          <LinkContainer to="/new">
            <Button variant="primary">New Character</Button>
          </LinkContainer>
          <LinkContainer to="/load">
            <Button variant="primary">Load Character</Button>
          </LinkContainer>
        </div>
      </Container>
    </div>
  );
}

export default Home;