import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  let currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <p>
        <a href="https://github.com/MitulMistry/character-sheet" target="_blank" rel="noreferrer">
          Github repo for this site
        </a>
        <br />
        &copy; Mitul Mistry { currentYear }
      </p>
    </div>
  );
}

export default Footer;