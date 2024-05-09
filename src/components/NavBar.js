import React from 'react';

const NavBar = ({ links }) => {
  return (
    <div>
      {links.map((link, index) => (
        <a key={index} href={`#${link.toLowerCase()}`}>{link}</a>
      ))}
    </div>
  );
};

export default NavBar;
