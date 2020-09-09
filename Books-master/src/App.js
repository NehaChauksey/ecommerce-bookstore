import React from 'react';
import Container from './components/container'
import bookstorebg from './components/images/bookstorebg.jpg'
import './App.css';

function App() {
  return (
    <div style={{backgroundImage: `url(${bookstorebg})`}}>
    <Container/> 
    </div>
  );
}

export default App;
