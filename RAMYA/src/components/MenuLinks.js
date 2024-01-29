// MenuLinks.js
import React from 'react';

const MenuLinks = ({ toggleMenu }) => {
  return (
      <div className="menu-links">
        <ul>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
  );
}

export default MenuLinks;
