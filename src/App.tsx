import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
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

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Counter />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <span>
    //       <span>Learn </span>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux-toolkit.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux Toolkit
    //       </a>
    //       ,<span> and </span>
    //       <a
    //         className="App-link"
    //         href="https://react-redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React Redux
    //       </a>
    //     </span>
    //   </header>
    // </div>
  );
}

export default App;
