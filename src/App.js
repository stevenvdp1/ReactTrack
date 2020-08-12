import React from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld.functional';
// import HelloWorld from './components/HelloWorld.class';

function App() {
  return (
    <div className="App">
      <HelloWorld name={"Steven"}/>
    </div>
  );
}

export default App;
