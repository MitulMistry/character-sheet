import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import CharacterForm from './components/CharacterForm/CharacterForm';
import LoadCharacters from './components/LoadCharacters/LoadCharacters';
import './App.css';

function App() {
  return (
    <Container className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="new" element={<CharacterForm />} />
          <Route path="edit" element={<CharacterForm />} />
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
