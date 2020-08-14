import React from 'react'

const styles = {
    container:{
        borderBottom:'solid black 2px',
        height:'50px',
        display:'flex',
        alignItems:'center',
    },
    text:{
        marginLeft:'5px'
    }
}

function Header(){
    return(
        <header style={styles.container}>
            <span style={styles.text}>ExampleApp</span>
        </header>
    )
}

export default Header