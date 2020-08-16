import React from 'react'
import Navigation from './Navigation'

const styles = {
    container:{
        borderBottom:'solid black 2px',
        minHeight:'50px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        padding:'0px 8px'
    },
    text:{}
}

function Header(){
    return(
        <header style={styles.container}>
            <span style={styles.text}>ExampleApp</span>
            <Navigation/>
        </header>
    )
}

export default Header