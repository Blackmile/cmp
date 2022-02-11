import React from 'react';
import './Header.css';
import Sidebar from '../sidebar/Sidebar'

function Header() {
  return (
    <div>
      <Sidebar />
      <h1>this is a header</h1>
    </div>
  );
}

export default Header;
