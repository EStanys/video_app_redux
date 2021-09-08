import React from 'react';
import './App.css';
import VideoApp from './screens/VideoApp/VideoApp';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Route path='/' component={VideoApp}></Route>
    </div>
  );
}

export default App;
