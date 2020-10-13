import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventCards from './views/EventCards'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <EventCards />
    </div>
  );
}

export default App;
