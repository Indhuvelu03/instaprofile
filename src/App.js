import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Highlights from './components/Highlights';
import Posts from './components/Posts';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Highlights />
      <Posts />
    </div>
  );
}

export default App;
