import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import CharacterNew from './components/CharacterNew/CharacterNew';
import CharacterEdit from './components/CharacterEdit/CharacterEdit';
import LoadCharacters from './components/LoadCharacters/LoadCharacters';
import './App.css';

function App() {
  return (
    <Container className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="new" element={<CharacterNew />} />
          <Route path="edit/:id" element={<CharacterEdit />} />
          <Route path="load" element={<LoadCharacters />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
