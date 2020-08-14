import React from 'react';
import './App.css';
import HelloWorld from './Components/HelloWorld.functional';
// import HelloWorld from './Components/HelloWorld.class';

function App() {
  return (
    <div className="App">
      <HelloWorld name={"Steven"}/>
    </div>
  );
}

export default App;
