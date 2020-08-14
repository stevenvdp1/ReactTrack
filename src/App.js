import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Body from './Components/Body';

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
