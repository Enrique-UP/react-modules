import React, { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
	const [show, setShow] = useState(false)
  const controlNavbar = () => {
      if (window.scrollY > 200 && window.scrollY <= 1000 ) {
          setShow(true)
      }else{
        setShow(false)
      }
  }

  useEffect(() => {
      window.addEventListener('scroll', controlNavbar)
      return () => {
          window.removeEventListener('scroll', controlNavbar)
      }
  }, [])
  return (
    <>
		<div className="App">
		 <header className={`active ${show && 'hidden'}`}></header>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
	</>
  );
}

export default App;
