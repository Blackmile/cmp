import React from 'react';
import './Header.css';
import Sidebar from '../sidebar/Sidebar'

function Header() {
  return (
    <div className='header'>
      <div className='header_details'>
        <Sidebar />
        <h1>this is a header</h1>
      </div>
    </div>
  );
}

export default Header;
