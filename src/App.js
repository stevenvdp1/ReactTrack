import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

const styles={
  container:{
    padding:0,
    margin:0,
    height:'100vh',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between'
  }
}
function App() {
  return (
    <div style={styles.container}>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
